import { Button } from "@mui/material";

import React, { useState } from 'react';
import CreateMeetingModal from "../../components/modal/contents/meeting/CreateMeetModal";

export default function CreateRegMeetings() {
  
  // 1. 생성 버튼을 누르면 모달창을 띄운다. 
  // 2. 모달창에서 입력한 조건으로 생성이 되어야 한다.
  // 3. 모달창에서 생성된 데이터는 정기모임 테이블에 리스트 형식으로 나열된다.

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        정기모임 개설하기
      </Button>
      <CreateMeetingModal open={open} handleClose={handleClose} />
    </div>
  );
}
