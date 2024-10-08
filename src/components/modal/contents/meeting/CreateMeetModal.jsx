import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
} from '@mui/material';
import Postcode from 'react-daum-postcode';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ko from 'date-fns/locale/ko';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const selectionOptions = ['선발형', '선착순'];

export default function CreateMeetingModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    modelName: '',
    selectionType: '',
    maxCount: '',
    modelDescription: '',
    modelAddress: '',
    modelPhotos: [],
    schedules: [],
  });
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);

  // 입력값 변경 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 주소 검색 완료 
  const handleAddressComplete = (data) => {
    setFormData({ ...formData, modelAddress: data.address });
    setIsPostcodeVisible(false);
  };

  // 사진 등록 
  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files);

    if (formData.modelPhotos.length + files.length > 5) {
      alert('최대 5개의 사진만 업로드할 수 있습니다.');
      return;
    }

    const newPhotos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFormData((prevData) => ({
      ...prevData,
      modelPhotos: [...prevData.modelPhotos, ...newPhotos],
    }));
  };

  // 사진 삭제 
  const removePhoto = (index) => {
    setFormData((prevData) => {
      const newPhotos = [...prevData.modelPhotos];
      URL.revokeObjectURL(newPhotos[index].preview); 
      newPhotos.splice(index, 1);
      return { ...prevData, modelPhotos: newPhotos };
    });
  };

  // 모집 일정 추가 
  const addSchedule = () => {
    setFormData((prevData) => ({
      ...prevData,
      schedules: [...prevData.schedules, { date: null, name: '' }],
    }));
  };

  // 모집 일정 변경
  const handleScheduleChange = (index, field, value) => {
    const newSchedules = [...formData.schedules];
    newSchedules[index][field] = value;
    setFormData({ ...formData, schedules: newSchedules });
  };

  // 모집 일정 삭제
  const removeSchedule = (index) => {
    const newSchedules = formData.schedules.filter((_, i) => i !== index);
    setFormData({ ...formData, schedules: newSchedules });
  };

  return (
    <>
      <Modal open={open} onClose={() => {
        setIsPostcodeVisible(false);
        handleClose();
      }}>
        <Box sx={{
          ...style,
          maxHeight: '80vh', 
          overflowY: 'auto',  
        }}>
          <Typography variant="h6" component="h2">
            정기모임 개설하기
          </Typography>

          <TextField
            fullWidth
            label="모임명"
            name="modelName"
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <Typography variant="body1" sx={{ mb: 2 }}>
            모집형태: {formData.selectionType || '선택하세요'} 
          </Typography>

          <Box sx={{ display: 'flex', mb: 2 }}>
            {selectionOptions.map((option) => (
              <Button
                key={option}
                variant={formData.selectionType === option ? 'contained' : 'outlined'}
                onClick={() => setFormData({ ...formData, selectionType: option })}
                sx={{ mr: 1, flex: 1 }}
              >
                {option}
              </Button>
            ))}
          </Box>

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
            value={formData.modelAddress}
            onChange={handleChange}
            sx={{ mb: 2 }}
            readOnly
          />
          <Button variant="contained" onClick={() => setIsPostcodeVisible(!isPostcodeVisible)} sx={{ mb: 2 }}>
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
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
            style={{ marginBottom: '16px' }}
          />
          {formData.modelPhotos.length >= 5 && (
            <Typography color="error" variant="body2">
              최대 5개까지 등록 가능합니다.
            </Typography>
          )}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', mb: 2 }}>
            {formData.modelPhotos.map((photo, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={photo.preview}
                  alt={`모임 사진 ${index + 1}`}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '8px' }}
                />
                <Button variant="contained" color="error" onClick={() => removePhoto(index)}>
                  삭제
                </Button>
              </Box>
            ))}
          </Box>

          <Typography variant="h6" sx={{ mt: 2 }}>
            모집 일정 등록
          </Typography>
          {formData.schedules.map((schedule, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                {index + 1}회차
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                <DatePicker
                  label="날짜 선택"
                  value={schedule.date}
                  onChange={(newValue) => handleScheduleChange(index, 'date', newValue)}
                  renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
                />
              </LocalizationProvider>
              <TextField
                label="모임 이름"
                value={schedule.name}
                onChange={(e) => handleScheduleChange(index, 'name', e.target.value)}
                sx={{ mr: 2 }}
              />
              <Button variant="contained" color="error" onClick={() => removeSchedule(index)}>
                삭제
              </Button>
            </Box>
          ))}
          <Button variant="contained" onClick={addSchedule} sx={{ width: '100%', mb: 2 }}>
            일정 추가
          </Button>

          <Button variant="contained" onClick={handleClose} sx={{ mt: 3 }}>
            모임 개설하기
          </Button>
        </Box>
      </Modal>

      {isPostcodeVisible && (
        <Modal open={isPostcodeVisible} onClose={() => setIsPostcodeVisible(false)}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            bgcolor: 'background.paper',
            p: 4,
            boxShadow: 24,
          }}>
            <Postcode onComplete={handleAddressComplete} />
          </Box>
        </Modal>
      )}
    </>
  );
}
