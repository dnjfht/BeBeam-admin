// 재활용할 테이블(표)(테이블을 만들 거면 이걸 가져다 사용!)

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const paginationModel = {
  page: 0,
  pageSize: 10,
};

export default function Table({
  columns,
  datas,
  ischeckbox,
  height = "72vh",
  children,
}) {
  return (
    <Paper sx={{ height: height, width: "100%", position: "relative" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        getRowHeight={() => "auto"}
        initialState={{ pagination: { paginationModel } }}
        hideFooterPagination={true}
        hideFooterSelectedRowCount={true}
        sx={{
          border: 0,
          "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            paddingY: 1,
          },
        }}
        checkboxSelection={ischeckbox}
      />
      {children}
    </Paper>
  );
}
