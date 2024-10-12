import { useState } from 'react';
import {TextField, Modal} from '@mui/material';
import Postcode from 'react-daum-postcode';
import ko from 'date-fns/locale/ko';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import BasicModal from "../../BasicModal";

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { BsXLg } from "react-icons/bs";

export default function CreateMeetingModal({ open, setOpen, onCreateMeeting }) {
  const selectionOptions = ['선발형', '선착순'];
  const hashtagOptions = ['야외활동', '실내활동', '친목도모', '운동', '예술', '음악', '여행', '스터디', '취미', '요리'];
  const currentDate = new Date();

  // 날짜를 YYYY.MM.DD 형식으로 변환하는 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const [formData, setFormData] = useState({
    startRecruitmentDate : formatDate(currentDate),
    finishRecruitmentDate : formatDate(new Date(currentDate.setDate(currentDate.getDate() + 21))),
    meetingState: "모집 중",
    modelName: '',
    selectionType: '',
    maxCount: 0,
    modelDescription: '',
    modelAddress: '',
    detailedAddress: '',
    thumbnail : null,
    meetingPhotos: [],
    schedules: [],
    hostNickname: '',
    hostDescription: '',
    hostPhoto: null,
    participationFee: 0,
  });

  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

const handleTagSelect = (tag) => {
  console.log(tag)
  if (selectedTags.includes(tag)) {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  } else if (selectedTags.length < 3) {
    setSelectedTags([...selectedTags, tag]);
  }

};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: name === 'maxCount' || name === 'participationFee' ? Number(value) : value,
  });
};


  const handleAddressComplete = (data) => {
    setFormData({ ...formData, modelAddress: data.address });
    setIsPostcodeVisible(false);
  };

  const removePhoto = (index) => {
    setFormData((prevData) => {
      const newPhotos = [...prevData.meetingPhotos];
      URL.revokeObjectURL(newPhotos[index].preview); 
      newPhotos.splice(index, 1);
      return { ...prevData, meetingPhotos: newPhotos };
    });
  };

  const addSchedule = () => {
    setFormData((prevData) => ({
      ...prevData,
      schedules: [...prevData.schedules, { date: null, name: '' }],
    }));
  };

  const handleScheduleChange = (index, field, value) => {
    const newSchedules = [...formData.schedules];
    newSchedules[index][field] = value;
    setFormData({ ...formData, schedules: newSchedules });
  };

  const removeSchedule = (index) => {
    const newSchedules = formData.schedules.filter((_, i) => i !== index);
    setFormData({ ...formData, schedules: newSchedules });
  };

  const handleMainPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        thumbnail: {
          file,
          preview: URL.createObjectURL(file),
        }, 
      });
    }
  };

  const handleHostPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        hostPhoto: {
          file,
          preview: URL.createObjectURL(file),
        },
      });
    }
  };

  const handleMeetingPhotoChange = (event) => {
    const files = Array.from(event.target.files);
    if (formData.meetingPhotos?.length + files.length > 10) {
      alert('최대 10개의 사진만 업로드할 수 있습니다.');
      return;
    }
    const newPhotos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormData((prevData) => ({
      ...prevData,
      meetingPhotos: [...prevData.meetingPhotos, ...newPhotos],
    }));
  };


  const handleCreateMeeting = () => {

    if (!formData.thumbnail) {
      alert("대표 사진을 설정해 주세요."); 
      return; 
    }
  
    if (!formData.modelName) {
      alert("모임 이름을 입력해 주세요.");
      return; 
    }
  

    if (!formData.selectionType) {
      alert("모집 형태를 선택해 주세요."); 
      return; 
    }

    if (formData.maxCount <= 0) {
      alert("최대 인원을 설정해 주세요."); 
      return; 
    }
  

    if (!formData.modelDescription) {
      alert("모임 설명을 입력해 주세요.");
      return; 
    }
  
    if (!formData.modelAddress) {
      alert("모임 주소를 입력해 주세요."); 
      return; 
    }
  
    if (!formData.detailedAddress) {
      alert("상세 주소를 입력해 주세요."); 
      return;
    }

    if (!formData.hostNickname) {
      alert("호스트 닉네임을 입력해 주세요."); 
      return; 
    }

    if (!formData.hostDescription) {
      alert("호스트 설명을 입력해 주세요."); 
      return; 
    }
  

    if (!formData.hostPhoto) {
      alert("호스트 사진을 설정해 주세요."); 
      return; 
    }
  

    if (formData.participationFee < 0) {
      alert("참여비를 0 이상으로 설정해 주세요."); 
      return; 
    }
  
    const newMeeting = {
      id: new Date().getTime(),
      hashTags: selectedTags,
      ...formData,
    };
    onCreateMeeting(newMeeting);
    setOpen(false);
  };
  
  const thumbnail = formData.thumbnail ? (
    <img src={formData.thumbnail.preview} alt="대표 사진"
    className="w-full h-full object-cover"/>
  ) : (<PhotoCamera />);

  const host = formData.hostPhoto ? (
    <img src={formData.hostPhoto.preview} alt="호스트 사진" className="w-full h-full object-full"/>
  ) : (<PhotoCamera />);

  return (
  <BasicModal isModalOpen={open} setIsModalOpen={setOpen} isMoreMenu={false}>

  <div className="w-full mb-5 pb-6 border-b-[1px] border-solid border-[#afafaf] flex items-center gap-x-3">
    <input
        accept="image/*"
        id="thumbnail-photo-input"
        type="file"
        style={{ display: 'none' }}
        onChange={handleMainPhotoChange}
    />
    <label htmlFor="thumbnail-photo-input">
        <div className="w-[100px] h-[100px] border-[1px] border-solid border-[#a3a3a3] rounded-lg flex items-center justify-center text-[#a3a3a3] overflow-hidden cursor-pointer">
            {thumbnail}
        </div>
    </label>

    <div className="text-[0.875rem] text-[#8c8c8c]">
      <h1 className="mb-1 text-[1.3rem] text-[#121212] font-bold">정기모임 개설하기</h1>
      <p>
        정기모임 생성에 필요한 정보들을 입력해주세요.<br />
        모임은 최소 3명을 채워야 개최가 가능합니다.<br />
        모임 모집 기간은 모두 동일하게 2주입니다.</p>
    </div>
</div>

<div>
  <h1 className="mb-4 text-[#121212]">모임</h1>

  <TextField fullWidth label="모임명" name="modelName" onChange={handleChange} sx={{ mb: 1 }}/>
  <TextField fullWidth label="모임 소개" name="modelDescription" onChange={handleChange} multiline rows={4}/>
</div>

<div className="mt-7">
  <h1 className="mb-4 text-[#121212]">
    모집형태: {formData.selectionType || '선택하세요'}
  </h1>

  <div className="grid grid-cols-2 gap-x-2">
    {selectionOptions.map((option) => (
      <button
        key={option}
        className={`${formData.selectionType === option ? 'bg-[#121212] text-white' : 'text-[#121212]'} py-3 border-[1px] border-solid border-[#121212] rounded-lg transition-all duration-700`}
        onClick={() => setFormData({ ...formData, selectionType: option })}
      >
        {option}
      </button>
    ))}
  </div>
</div>

<div className="mt-7">
  <h1 className="mb-4 text-[#121212]">
    최대 인원
  </h1>
   
  <TextField fullWidth label="최대 인원" name="maxCount" onChange={handleChange}/>
</div>

<div className="mt-7">
  <h1 className="mb-4 text-[#121212]">
    모임 장소
  </h1>

  <div className="mb-2 flex items-center gap-x-2">
  <TextField fullWidth readOnly label="모임 장소를 선택해주세요." name="modelAddress" value={formData.modelAddress} onChange={handleChange} placeholder="모임 장소를 선택해주세요."/>
  <button
  onClick={() => setIsPostcodeVisible(!isPostcodeVisible)}
  className="h-[56px] px-3 bg-[#121212] rounded-lg text-white text-[0.875rem]"
  >
    주소 검색
  </button>
  </div>
  <TextField fullWidth label="상세 주소를 입력해주세요." name="detailedAddress" value={formData.detailedAddress} onChange={handleChange} placeholder="상세 주소를 입력해주세요." />

  {/* 주소 검색창 */}
  {isPostcodeVisible && (
    <Modal open={isPostcodeVisible} onClose={() => setIsPostcodeVisible(false)}>
      <div className="w-[400px] p-4 bg-white shadow-md absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <Postcode onComplete={handleAddressComplete} />
      </div>
    </Modal>
  )}
</div>

<div className="mt-7">
  <h1 className="mb-4 text-[#121212]">
    호스트
  </h1>

  <div className="mb-2 flex items-center gap-x-2">
    <TextField fullWidth label="호스트 닉네임" name="hostNickname" onChange={handleChange}/>
    <div className="w-[56px] h-[56px] border-[1px] border-solid border-[#a3a3a3] rounded-lg flex items-center justify-center text-[#a3a3a3] overflow-hidden cursor-pointer">
      <input accept="image/*" id="host-photo-input" type="file" style={{ display: 'none' }} onChange={handleHostPhotoChange} />
      <label htmlFor="host-photo-input">{host}</label>
    </div>
  </div>   
  <TextField fullWidth label="호스트 소개" name="hostDescription" onChange={handleChange} multiline rows={3}/>
</div>

<TextField 
  fullWidth 
  label="참가비" 
  name="entryFee" 
  onChange={handleChange}
  type="number"
  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', style: { MozAppearance: 'textfield' } }}
  sx={{
    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    }
  }}
/>

<div className="mt-7 text-[#8a8a8a]">
  <div className={`${formData.meetingPhotos.length === 0 ? "mb-0" : "mb-4"} flex justify-between items-center`}>
    <div>
      <h1 className="text-[#121212]"> 모임 사진 등록</h1>
      <p className="text-[0.875rem]">최대 10개까지 선택 가능합니다.</p>
    </div>
    
      <button className="px-3 py-2 bg-[#121212] rounded-lg text-white text-[0.875rem]" onClick={() => document.getElementById('meeting-photo-input').click()}>
        사진 추가
        <input type="file" accept="image/*" id="meeting-photo-input" multiple onChange={handleMeetingPhotoChange} style={{ display: 'none' }} />
      </button>
  </div>

  <div className="flex flex-wrap gap-2">
    {formData.meetingPhotos.map((photo, index) => (
      <div className="relative">
        <img src={photo.preview} alt={`모임 사진 ${index + 1}`} className="w-[100px] h-[100px] object-cover rounded-lg"/>
        <button onClick={() => removePhoto(index)} className="text-white absolute top-1 right-1"><BsXLg/></button>
      </div>
    ))}
  </div>
</div>

<div className="mt-7 text-[#8a8a8a]">
  <h1 className="text-[#121212]">모임 일정 등록</h1>
  <p className="mb-4 text-[0.875rem]">모임 회차별 날짜와 소모임 내용을 입력해주세요.</p>

  {formData.schedules.map((schedule, index) => (
    <div key={index} className='w-full mb-2 p-2 border-box bg-[#e2e6ea] rounded-lg shadow-lg flex items-center gap-x-4'>
      <div className="relative w-[10%]">
        <p className="text-center text-[0.875rem] text-[#121212]">{index + 1}회차</p>
        <div className="absolute right-[-5px] top-1/2 transform -translate-y-1/2 w-[1px] h-[18px] bg-[#b9b9b9]" />
      </div>

      <div className="w-[30%] relative">
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
          <DatePicker 
            label="날짜 선택" 
            value={schedule.date} 
            onChange={(newValue) => handleScheduleChange(index, 'date', newValue)}
            renderInput={(params) => <TextField {...params}/>}
          />
        </LocalizationProvider>
        <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-[1px] h-[18px] bg-[#b9b9b9]" />
      </div>

    <div className="w-[56%] relative">
      <TextField 
        label="모임 내용" 
        value={schedule.name} 
        onChange={(e) => handleScheduleChange(index, 'name', e.target.value)} 
        sx={{width: "100%"}}
      />
      <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-[1px] h-[18px] bg-[#b9b9b9]" />
    </div>
      
      <button onClick={() => removeSchedule(index)}><BsXLg/></button>
    </div>
  ))}
          
    <button onClick={addSchedule} className="w-full py-2 bg-[#121212] rounded-lg text-white text-[0.875rem]">추가하기</button>
</div>

  <div className="mt-7 text-[#8a8a8a]">
    <h1 className="text-[#121212]">해시태그 선택</h1>
    <p className="mb-4 text-[0.875rem]">최대 3개까지 선택 가능합니다.</p>

    <div className="flex flex-wrap items-center gap-2">
      {hashtagOptions.map((tag) => <button key={tag} className={`${selectedTags.includes(tag) ? 'bg-[#121212] text-white' : 'text-[#121212]'} px-2 py-1 border-[1px] border-solid border-[#121212] rounded-lg transition-all duration-700`} onClick={() => handleTagSelect(tag)}>#{tag}</button>)}
    </div>
  </div>

  <button onClick={handleCreateMeeting} className="w-full mt-8 py-2 bg-[#121212] rounded-lg text-white text-[0.875rem]">모임 개설하기</button>
</BasicModal>
  );
}
