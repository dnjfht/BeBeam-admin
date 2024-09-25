import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'id', headerName: '글번호', width: 90 },
  {
    field: 'nickName',
    headerName: '닉네임',
    width: 150,
    editable: false,
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
  { id: 1, realName: '조진웅', nickName: '롯데우승기원', date: '2024-09-24', post: '소셜다이닝: 이상식탁', review: '부산 갈~매 기 붓싼 가아아아알~매 애애애기가아아아알~매 애애애기가아아아알~매 애애애기가아아아알~매 애애애기가아아아알~매 애애애기 범규 개못가르치고 aws 야매로 가르침' },
  { id: 2, realName: '이대호', nickName: '곱창맛있어', date: '2024-09-25', post: '범규의 코딩고실: 내배캠', review: '졸라 못가르침, 와인이나 먹으러 다니고 쓰레기임 그 사람' },
  { id: 3, realName: '박세웅', nickName: 'FA대박', date: '2024-09-26', post: '소셜다이닝: 이상식탁', review: '졸라 못가르침' },
  { id: 4, realName: '호날두', nickName: '호우', date: '2024-09-27', post: '범규의 코딩고실: 내배캠', review: '강남 클럽에서 돈 엄청쓰는거 봄' },
  { id: 5, realName: '메시', nickName: 'GOAT', date: '2024-09-28', post: '소셜다이닝: 이상식탁', review: '졸라 못가르침' },
  { id: 6, realName: '카카', nickName: '까까', date: '2024-09-29', post: '범규의 코딩고실: 내배캠', review: '졸라 못가르침' },
  { id: 7, realName: '손흥민', nickName: '손홍민', date: '2024-09-30', post: '소셜다이닝: 이상식탁', review: '졸라 못가르침' },
  { id: 8, realName: '박지성', nickName: '두개의심장', date: '2024-10-01', post: '범규의 코딩고실: 내배캠', review: '졸라 못가르침' },
  { id: 9, realName: '설기현', nickName: '역주행', date: '2024-10-02', post: '범규의 코딩고실: 내배캠', review: '졸라 못가르침' },
  { id: 10, realName: '이범규', nickName: '범규와와인한잔', date: '2024-10-02', post: '범규의 코딩고실: 내배캠', review: '미안하면 내배캠 한 번 더 시켜줘라' },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid 
        rows={rows}
        getRowHeight={() => 'auto'}
        sx={{
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { pt: '30px' , pb: '15px'},
        }}
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
      />
    </Box>
  );
}
