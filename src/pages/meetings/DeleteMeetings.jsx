import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import MeetingModal from "../../components/modal/contents/meeting/MeetingDetailModal";
import { Menu, MenuItem, Button } from "@mui/material";

const deletedMeetingData = [
  {
    id: 1,
    hostNickname: "유형1",
    meetingName: "지난 팀 회의",
    location: "서울시 강남구",
    recruitmentStatus: "삭제됨",
    startDate: "2024.01.01",
    endDate: "2024.01.31",
    participantCount: 15,
    notes: "삭제된 모임입니다",
  },
  {
    id: 2,
    hostNickname: "유형2",
    meetingName: "지난 리뷰 미팅",
    location: "부산시 해운대구",
    recruitmentStatus: "삭제됨",
    startDate: "2024.02.01",
    endDate: "2024.02.15",
    participantCount: 20,
    notes: "삭제된 모임입니다",
  },
  {
    id: 3,
    hostNickname: "유형3",
    meetingName: "지난 워크숍",
    location: "대구시 수성구",
    recruitmentStatus: "삭제됨",
    startDate: "2024.06.01",
    endDate: "2024.06.30",
    participantCount: 25,
    notes: "삭제된 모임입니다",
  },
  {
    id: 4,
    hostNickname: "유형4",
    meetingName: "지난 컨퍼런스",
    location: "인천시 남구",
    recruitmentStatus: "삭제됨",
    startDate: "2024.09.01",
    endDate: "2024.09.10",
    participantCount: 30,
    notes: "삭제된 모임입니다",
  },
];

function Table({
  columns,
  datas,
  ischeckbox,
  selectedIdList,
  setSelectedIdList,
  onRowClick,
}) {
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Paper sx={{ height: "78vh", width: "100%", position: "relative" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        getRowHeight={() => "auto"}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          border: 0,
          "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            paddingY: 1,
          },
        }}
        checkboxSelection={ischeckbox}
        disableRowSelectionOnClick
        rowSelectionModel={selectedIdList}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectedIdList(newRowSelectionModel);
        }}
        onRowClick={onRowClick}
      />
    </Paper>
  );
}

// 삭제된 모임 리스트 컴포넌트
export default function DeleteMeetings() {
  const [selectedIdList, setSelectedIdList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState(deletedMeetingData);
  const isCheckboxEnabled = true;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "hostNickname", headerName: "호스트 닉네임", width: 150 },
    {
      field: "meetingName",
      headerName: "모임명",
      width: 200,
      renderCell: (params) => (
        <span
          onClick={(event) => handleMenuClick(event, params.row)}
          style={{ cursor: "pointer" }}
        >
          {params.value}
        </span>
      ),
    },
    { field: "location", headerName: "개최 장소", width: 150 },
    { field: "recruitmentStatus", headerName: "상태", width: 120 },
    { field: "startDate", headerName: "모임 시작일", width: 150 },
    { field: "endDate", headerName: "모임 종료일", width: 150 },
    { field: "participantCount", headerName: "모집 인원 수", width: 150 },
    { field: "notes", headerName: "비고", width: 200 },
  ];

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedMeeting(row);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenDetails = () => {
    setIsModalOpen(true);
    handleCloseMenu();
  };

  const handleDeleteSelected = () => {
    setData((prevData) =>
      prevData.filter((item) => !selectedIdList.includes(item.id))
    );
    setSelectedIdList([]); // 선택된 목록 초기화
  };

  return (
    <div>
      <div className="button-group">
        <button className="button" onClick={() => {}}>
          삭제된 모임 리스트
        </button>
      </div>

      <div>
        <h1>삭제된 모임 리스트</h1>
        <Table
          columns={columns}
          datas={data}
          ischeckbox={isCheckboxEnabled}
          selectedIdList={selectedIdList}
          setSelectedIdList={setSelectedIdList}
        />
      </div>
      <Button
        variant="contained"
        color="outlined"
        onClick={handleDeleteSelected}
        disabled={selectedIdList.length === 0}
        style={{ marginTop: "10px" }}
      >
        선택한 항목 삭제
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
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
