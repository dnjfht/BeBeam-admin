import React, { useState } from 'react';
import './HashTag.css'; // 필요한 스타일을 위한 CSS 파일
import Table from '../components/table/Table';

const mockData = [
  {
    id: 1,
    name: "등산모임",
    hashtags: ["#등산", "#운동"]
  },
  {
    id: 2,
    name: "영화함께보기 모임",
    hashtags: ["#영화", "#취미"]
  },
  {
    id: 3,
    name: "책 읽는 모임",
    hashtags: ["#독서", "#취미"]
  },
  {
    id: 4,
    name: "런닝 친구들",
    hashtags: ["#런닝", "#운동"]
  },
  {
    id: 5,
    name: "요리사들의 모임",
    hashtags: ["#요리", "#취미"]
  },
  {
    id: 6,
    name: "음악 감상 모임",
    hashtags: ["#음악", "#취미"]
  }
];

const HashTags = () => {
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [filteredMeetings, setFilteredMeetings] = useState(mockData);

  const handleHashtagClick = (hashtag) => {
    // 이미 선택된 해쉬태그가 있다면 토글로 선택 취소
    const updatedHashtags = selectedHashtags.includes(hashtag)
      ? selectedHashtags.filter((tag) => tag !== hashtag)
      : [...selectedHashtags, hashtag];

    setSelectedHashtags(updatedHashtags);

    // 선택된 해쉬태그와 일치하는 모임 필터링
    const filtered = mockData.filter((meeting) =>
      updatedHashtags.every((tag) => meeting.hashtags.includes(tag))
    );
    setFilteredMeetings(filtered);
  };

  // 테이블에 사용할 columns 정의
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: '모임 이름', width: 200 },
    { field: 'hashtags', headerName: '해쉬태그', width: 300, renderCell: (params) => params.value.join(', ') }
  ];

  return (
    <div className="search-bar-container">

      <div>
        <h2>해쉬태그 선택하기</h2>
      </div>
      
      {/* 해쉬태그 버튼 목록 */}
      <div className="hashtag-buttons">
        {['#등산', '#운동', '#영화', '#취미', '#독서', '#런닝', '#요리', '#음악'].map((hashtag) => (
          <button
            key={hashtag}
            className={selectedHashtags.includes(hashtag) ? "selected" : ""}
            onClick={() => handleHashtagClick(hashtag)}
            style={{ margin: '5px', padding: '10px' }}
          >
            {hashtag}
          </button>
        ))}
      </div>




      <div>
        <h1>모임 목록 (표 형식)</h1>
        {/* Table 컴포넌트를 사용하여 필터링된 데이터를 테이블로 표시 */}
        <Table 
          columns={columns} 
          datas={filteredMeetings} 
          ischeckbox={false} 
          selectedIdList={[]} 
          setSelectedIdList={() => {}} 
        />
      </div>
    </div>
  );
};

export default HashTags;