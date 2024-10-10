import { Button } from "@mui/material";
import React, { useState } from 'react';
import CreateMeetingModal from "../../components/modal/contents/meeting/CreateMeetModal";
import Table from "../../components/table/Table";

  // 1. 생성 버튼을 누르면 모달창을 띄운다. 
  // 2. 모달창에서 입력한 조건으로 생성이 되어야 한다.
  // 3. 모달창에서 생성된 데이터는 정기모임 테이블에 리스트 형식으로 나열된다.

export default function CreateRegMeetings() {
  const [open, setOpen] = useState(false);
  const [meetingData, setMeetingData] = useState([]); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 모달에서 데이터 생성 시 호출될 함수
  const handleCreateMeeting = (newMeeting) => {
    const transformedMeeting = {
      id: newMeeting.id,
      profile: newMeeting.modelPhotos.length > 0 ? newMeeting.modelPhotos[0].preview : '', // 첫 번째 사진을 프로필로 설정
      nickname: newMeeting.hostNickname,
      meetingName: newMeeting.modelName,
      location: newMeeting.modelAddress,
      startDate: newMeeting.schedules[0]?.date?.toLocaleDateString() || '', // 첫 번째 일정 날짜
      participants: newMeeting.maxCount,
      participationFee: '무료', // 이 필드는 임의로 설정하였으니 수정 가능합니다.
      wishCount: 0, // 임의 초기화, 필요에 따라 수정 가능
    };
    
    setMeetingData((prevData) => [...prevData, transformedMeeting]);
  };
    

  // 테이블 컬럼 정의
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'profile', headerName: '프로필', width: 150 },
    { field: 'nickname', headerName: '닉네임', width: 150 },
    { field: 'meetingName', headerName: '모임명', width: 200 },
    { field: 'location', headerName: '개최 장소', width: 200 },
    { field: 'startDate', headerName: '모집 시작일', width: 150 },
    { field: 'participants', headerName: '모집 참여자 수', width: 200 },
    { field: 'participationFee', headerName: '참여비', width: 150 },
    { field: 'wishCount', headerName: '찜 수', width: 150 },
  ];
  
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        정기모임 개설하기
      </Button>
      <CreateMeetingModal open={open} handleClose={handleClose} onCreateMeeting={handleCreateMeeting} />
      
      <Table 
        columns={columns} 
        datas={meetingData} // 테이블 데이터로 meetingData 사용
      />
    </div>
  );
}
