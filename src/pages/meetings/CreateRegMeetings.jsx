import { useState } from 'react';
import CreateMeetingModal from "../../components/modal/contents/meeting/CreateMeetModal";
import Table from "../../components/table/Table";

export default function CreateRegMeetings() {
  const [open, setOpen] = useState(false);
  const [meetingData, setMeetingData] = useState([]); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 모달에서 데이터 생성 시 호출될 함수
  const handleCreateMeeting = (newMeeting) => {
    const transformedMeeting = {
      id: newMeeting.id,
      state : newMeeting.meetingState,
      type : newMeeting.selectionType,
      thumbnail : newMeeting.thumbnail.preview ?? '', // 맨 위에서 받은 모임 대표 이미지
      meetingName: newMeeting.modelName,
      meetingDes: newMeeting.modelDescription,
      hostName: newMeeting.hostNickname,
      location: newMeeting.modelAddress,
      startRecruitmentDate: newMeeting.startRecruitmentDate, // 모집 시작일 날짜
      finishRecruitmentDate: newMeeting.finishRecruitmentDate, // 마지막 모임 일정 날짜
      startMeetingDate: newMeeting.schedules[0]?.date?.toLocaleDateString() || '', // 모임 시작일
      finishMeetingDate: newMeeting.schedules[newMeeting.schedules.length -1]?.date?.toLocaleDateString() || '', // 모임 마지막일
      minParticipants: 3,
      maxParticipants: newMeeting.maxCount,
      currentApplicant : 0,
      participationFee: '무료', // 이 필드는 임의로 설정하였으니 수정 가능합니다.
      wishCount: 0, // 임의 초기화, 필요에 따라 수정 가능
      hashTags : newMeeting.hashTags
    };
    
    setMeetingData((prevData) => [...prevData, transformedMeeting]);
  };

  // 테이블 컬럼 정의
  const columns = [
    { field: 'id', headerName: 'ID', width: 90, renderCell: () => <span>***********</span>, },
    { field: 'state', headerName: '모임 상태', width: 90 },
    { field: 'type', headerName: '모집 형태', width: 90 },
    {field: 'thumbnail', headerName: '썸네일', width: 70,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.row.thumbnail}
          alt="모임 대표 이미지"
          style={{
            width: 40,
            height: 40,
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
      ),},
    { field: 'meetingName', headerName: '모임명', width: 120 },
    { field: 'meetingDes', headerName: '모임 소개', width: 200 },
    { field: 'hostName', headerName: '호스트', width: 120 },  
    { field: 'location', headerName: '개최 장소', width: 200 },
    { field: 'startRecruitmentDate', headerName: '모집 시작일', width: 100 },
    { field: 'finishRecruitmentDate', headerName: '모집 마감일', width: 100 },
    { field: 'startMeetingDate', headerName: '모임 시작일', width: 100 },
    { field: 'finishMeetingDate', headerName: '모임 종료일', width: 100 },
    { field: 'minParticipants', headerName: '최소 참여인원', width: 100 },
    { field: 'maxParticipants', headerName: '최대 참여인원', width: 100 },
    { field: 'currentApplicant', headerName: '현재 신청인원', width: 100 },
    { field: 'participationFee', headerName: '참여비', width: 100 },
    { field: 'wishCount', headerName: '찜 수', width: 70 },
    { field: 'hashTags', headerName: '해쉬태그', width: 100, 
      renderCell: (params) => (
      <div className="flex flex-col items-start gap-y-2">
      {params.row.hashTags?.map((hashTag) => <p>{hashTag}</p>)}
      </div>
    ),
  },
  ];
  
  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">정기모임 개설</h1>

    <div className="w-full mb-3 flex justify-end">
      <button onClick={handleOpen} className='px-3 py-2 bg-[#121212] rounded-lg text-white'>
        정기모임 개설하기
      </button>
    </div>

      <CreateMeetingModal open={open} setOpen={setOpen} handleClose={handleClose} onCreateMeeting={handleCreateMeeting} />
      
      <Table 
        columns={columns} 
        datas={meetingData} 
      />
    </div>
  );
}
