import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function CreateMeetingModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    modelName: '',
    selectionType: '',
    maxCount: '',
    modelDescription: '',
    modelAddress: '',
    modelDetails: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addDetail = () => {
    setFormData({
      ...formData,
      modelDetails: [...formData.modelDetails, ''],
    });
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...formData.modelDetails];
    newDetails[index] = value;
    setFormData({ ...formData, modelDetails: newDetails });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          정기모임 개선하기
        </Typography>
        <TextField
          fullWidth
          label="모임명"
          name="modelName"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="선택형"
          name="selectionType"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="최대 인원"
          name="maxCount"
          onChange={handleChange}
          type="number"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="모임 소개"
          name="modelDescription"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="모임 장소를 선택해주세요."
          name="modelAddress"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" sx={{ mb: 2 }}>
          주소 검색
        </Button>

        <Typography variant="h6" sx={{ mt: 2 }}>
          호스트
        </Typography>
        <TextField
          fullWidth
          label="호스트 닉네임을 입력하세요."
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="호스트 소개를 입력하세요."
          sx={{ mb: 2 }}
        />

        <Typography variant="h6" sx={{ mt: 2 }}>
          모임 사진 등록 (최대 5개까지 등록 가능합니다.)
        </Typography>
        <IconButton color="primary" onClick={addDetail}>
          <AddIcon />
        </IconButton>

        {formData.modelDetails.map((detail, index) => (
          <TextField
            key={index}
            fullWidth
            label={`세부사항 ${index + 1}`}
            value={detail}
            onChange={(e) => handleDetailChange(index, e.target.value)}
            sx={{ mb: 2 }}
          />
        ))}

        <Button variant="contained" onClick={handleClose}>
          모임 개선하기
        </Button>
      </Box>
    </Modal>
  );
}
