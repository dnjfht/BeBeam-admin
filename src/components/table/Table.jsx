// 재활용할 테이블(표)(테이블을 만들 거면 이걸 가져다 사용!)

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const paginationModel = {
  page: 0,
  pageSize: 10,
};

export default function Table({ columns, datas, children }) {
  return (
    <Paper sx={{ height: "78vh", width: "100%" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{
          border: 0,
        }}
      />
      {children}
    </Paper>
  );
}
