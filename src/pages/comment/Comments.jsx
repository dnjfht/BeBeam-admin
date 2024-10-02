import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { IsModalOpenState } from "../../recoil/content";
import {
  AnchorElState,
  SelectedIdState,
  SelectedNicknameState,
  UsersState
} from '../../recoil/user';
import BasicModal from '../../components/modal/BasicModal';
import UserDetails from '../../components/modal/contents/User/UserDetails';
import { handleNicknameClick } from "../../common";

export default function DataGridDemo() {
  const [selectedId, setSelectedId] = useRecoilState(SelectedIdState);
  const [selectedNickname, setSelectedNickname] = useRecoilState(SelectedNicknameState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpenState);
  const [users] = useRecoilState(UsersState);
  const [anchorEl, setAnchorEl] = useRecoilState(AnchorElState);

  const columns = [
    { field: 'id', headerName: '글번호', width: 90 },
    {
      field: 'nickName',
      headerName: '닉네임',
      width: 150,
      renderCell: (params) => (
        <span
          onClick={(e) =>
            handleNicknameClick(
              e,
              params.row,
              setAnchorEl,
              setSelectedNickname,
              setSelectedId
            )
          }
          style={{ cursor: "pointer" }}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: 'realName',
      headerName: '이름',
      width: 150,
      editable: false,
    },
    {
      field: 'date',
      headerName: '작성 일자',
      width: 180,
      editable: false,
      renderEditCell: (params) => (
        <DatePicker
          value={params.value}
          onChange={(newValue) => params.api.setEditCellValue({ id: params.id, field: params.field, value: newValue })}
          renderInput={(props) => <TextField {...props} />}
        />
      ),
    },
    {
      field: 'post',
      headerName: '댓글단 글',
      width: 200,
      editable: true,
    },
    {
      field: 'review',
      headerName: '후기 댓글',
      width: 500,
      editable: false,
    },
  ];

  const rows = [
    { id: 1, realName: '조진웅', nickName: '롯데우승기원', date: '2024-09-24', post: '소셜다이닝: 이상식탁', review: '부산 갈~매 기 붓싼 가아아아알~매 애애애기가아아아알~매' },
    { id: 2, realName: '이대호', nickName: '곱창맛있어', date: '2024-09-25', post: '범규의 코딩고실: 내배캠', review: '졸라 못가르침, 와인이나 먹으러 다니고 쓰레기임 그 사람' },
    { id: 3, realName: '김해준', nickName: '여행은필수', date: '2024-09-20', post: '마운틴: 제주여행', review: '제주도에서의 시간은 정말 최고였어요. 다시 가고 싶네요.' },
    { id: 4, realName: '이영애', nickName: '드라마퀸', date: '2024-09-18', post: '사랑의 불시착: 다시보기', review: '이 드라마는 다시 봐도 정말 눈물나네요.' },
    { id: 5, realName: '박보검', nickName: '보검홀릭', date: '2024-09-17', post: '보검의 하루', review: '박보검의 팬미팅은 정말 잊을 수 없는 경험이었어요.' },
    { id: 6, realName: '손흥민', nickName: '축구왕', date: '2024-09-19', post: '토트넘 경기 후기', review: '흥민이가 한 골 넣었을 때 정말 소름이 돋았어요.' },
    { id: 7, realName: '류현진', nickName: '야구천재', date: '2024-09-16', post: 'MLB 경기 리뷰', review: '메이저리그 경기는 언제 봐도 재미있네요.' },
    { id: 8, realName: '김연아', nickName: '피겨여왕', date: '2024-09-15', post: '피겨 스케이팅', review: '김연아 선수는 언제나 저의 영웅입니다.' },
  ];

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid 
        rows={rows}
        getRowHeight={() => 'auto'}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        isTableModal={isModalOpen ? false : true}
        selectedNickname={selectedNickname}
        selectedId={selectedId}
        setIsModalOpen={setIsModalOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <BasicModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAnchorEl={setAnchorEl}
      > 
      

      </BasicModal>
    </Box>
  );
}
