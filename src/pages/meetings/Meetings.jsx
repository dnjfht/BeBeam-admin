import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // useNavigate import 추가
import './Meetings.css';
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import MeetingModal from './MeetingModal';

const meetingData = [
  {
      id: 1,
      hostNickname: '유형1',
      meetingName: '1분기 팀 회의',
      location: '서울시 강남구',
      recruitmentStatus: '모집 중',
      startDate: '2024.01.01',
      endDate: '2024.01.31',
      participantCount: 15,
      notes: '모임 참석 필수',
  },
  {
      id: 2,
      hostNickname: '유형2',
      meetingName: '상반기 리뷰 미팅',
      location: '부산시 해운대구',
      recruitmentStatus: '모집 중',
      startDate: '2024.02.01',
      endDate: '2024.02.15',
      participantCount: 20,
      notes: 'Zoom 링크 공유 예정',
  },
  {
      id: 3,
      hostNickname: '유형3',
      meetingName: '여름 워크숍',
      location: '대구시 수성구',
      recruitmentStatus: '모집 마감',
      startDate: '2024.06.01',
      endDate: '2024.06.30',
      participantCount: 25,
      notes: '사전 등록 필요',
  },
  {
      id: 4,
      hostNickname: '유형4',
      meetingName: '가을 컨퍼런스',
      location: '인천시 남구',
      recruitmentStatus: '모집 마감',
      startDate: '2024.09.01',
      endDate: '2024.09.10',
      participantCount: 30,
      notes: '패널 발표 예정',
  },
  // ... (다른 데이터 생략)
];


// 테이블 컴포넌트
function Table({ columns, datas, children, ischeckbox, selectedIdList, setSelectedIdList, onRowClick }) {
  const paginationModel = {
      page: 0,
      pageSize: 10,
  };

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
              onRowClick={onRowClick} // 클릭 핸들러 추가
          />
          {children}
      </Paper>
  );
}

// 모임 리스트 컴포넌트
export default function Meetings() {
  const [selectedIdList, setSelectedIdList] = useState([]);
  const [filterStatus, setFilterStatus] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const [selectedMeeting, setSelectedMeeting] = useState(null); // 선택한 모임 정보 상태
  const isCheckboxEnabled = true; // 체크박스 활성화 여부

  const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'hostNickname', headerName: '호스트 닉네임', width: 150 },
      { field: 'meetingName', headerName: '모임명', width: 200 },
      { field: 'location', headerName: '개최 장소', width: 150 },
      { field: 'recruitmentStatus', headerName: '모집 상태', width: 120 },
      { field: 'startDate', headerName: '모임 시작일', width: 150 },
      { field: 'endDate', headerName: '모임 종료일', width: 150 },
      { field: 'participantCount', headerName: '모집 인원 수', width: 150 },
      { field: 'notes', headerName: '비고', width: 200 },
  ];

  // 필터링된 데이터
  const filteredData = meetingData.filter((meeting) => {
      if (filterStatus === '모집 중') return meeting.recruitmentStatus === '모집 중';
      if (filterStatus === '모집 마감') return meeting.recruitmentStatus === '모집 마감';
      return true; // 전체
  });

  // 모임 클릭 시 실행되는 함수
  const handleRowClick = (params) => {
      setSelectedMeeting(params.row); // 클릭한 모임 정보를 설정
      setIsModalOpen(true); // 모달 열기
  };

  return (
      <div>
          <div className="button-group">
              <button className="button" onClick={() => setFilterStatus('전체')}>전체 모임</button>
              <button className="button" onClick={() => setFilterStatus('모집 중')}>모집 중</button>
              <button className="button" onClick={() => setFilterStatus('모집 마감')}>모집 마감</button>
          </div>

          <div>
              <h1>모집 리스트</h1>
              <Table
                  columns={columns}
                  datas={filteredData}
                  ischeckbox={isCheckboxEnabled}
                  selectedIdList={selectedIdList}
                  setSelectedIdList={setSelectedIdList}
                  onRowClick={handleRowClick} // 클릭 핸들러 전달
              />
          </div>

          {/* 모달 표시 */}
          <MeetingModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              meeting={selectedMeeting} 
          />
      </div>
  );
}

