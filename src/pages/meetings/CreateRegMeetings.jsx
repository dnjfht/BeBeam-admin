import { useState } from 'react';
import CreateMeetingModal from "../../components/modal/contents/meeting/CreateMeetModal";
import Table from "../../components/table/Table";
import { Menu, MenuItem } from '@mui/material';
import MeetingModal from './MeetingModal';

export default function CreateRegMeetings() {
  const [open, setOpen] = useState(false);
  const [meetingData, setMeetingData] = useState([]); 
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleCreateMeeting = (newMeeting) => {
    const transformedMeeting = {
      id: newMeeting.id,
      state: newMeeting.meetingState,
      type: newMeeting.selectionType,
      thumbnail: newMeeting.thumbnail.preview ?? '',
      meetingName: newMeeting.modelName,
      meetingDes: newMeeting.modelDescription,
      hostName: newMeeting.hostNickname,
      location: newMeeting.modelAddress,
      startRecruitmentDate: newMeeting.startRecruitmentDate,
      finishRecruitmentDate: newMeeting.finishRecruitmentDate,
      startMeetingDate: newMeeting.schedules[0]?.date?.toLocaleDateString() || '',
      finishMeetingDate: newMeeting.schedules[newMeeting.schedules.length -1]?.date?.toLocaleDateString() || '',
      minParticipants: 3,
      maxParticipants: newMeeting.maxCount,
      currentApplicant: 0,
      participationFee: '무료',
      wishCount: 0,
      hashTags: newMeeting.hashTags
    };
    
    setMeetingData((prevData) => [...prevData, transformedMeeting]);
  };

  const handleMenuClick = (event, row) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setSelectedMeeting(row);
  };

  const handleOpenDetails = () => {
    setIsModalOpen(true);
    handleCloseMenu();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90, renderCell: () => <span>***********</span> },
    { field: 'state', headerName: '모임 상태', width: 90 },
    { field: 'type', headerName: '모집 형태', width: 90 },
    {
      field: 'thumbnail', headerName: '썸네일', width: 70,
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
      ),
    },
    {
      field: 'meetingName', headerName: '모임명', width: 120,
      renderCell: (params) => (
        <span
          onClick={(event) => handleMenuClick(event, params.row)}
          style={{ cursor: 'pointer' }}
        >
          {params.value}
        </span>
      ),
    },
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
    {
      field: 'hashTags', headerName: '해쉬태그', width: 100,
      renderCell: (params) => (
        <div className="flex flex-col items-start gap-y-2">
          {params.row.hashTags?.map((hashTag) => <p key={hashTag}>{hashTag}</p>)}
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

      <Table columns={columns} datas={meetingData} />

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleOpenDetails}>모임 상세</MenuItem>
        <MenuItem onClick={handleCloseMenu}>취소</MenuItem>
      </Menu>

      <MeetingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        meeting={selectedMeeting}
      />
    </div>
  );
}
