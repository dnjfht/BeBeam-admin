import React, { useState } from "react";
import "./MeetingModal.css"; // 스타일을 위한 CSS 파일
import { FaTimes, FaEllipsisV } from "react-icons/fa"; // 필요한 아이콘들

// 가짜 데이터 생성
const mockMeeting = {
  id: 1,
  hostNickname: "내가 바로 HOST",
  location: "서울시 강남구",
  participantCount: 4,
  recruitmentStatus: "모집 마감",
  startDate: "2024-10-01",
  endDate: "2024-10-10",
  applicants: [
    {
      profileImage: "/path/to/host-image.jpg",
      nickname: "내가 바로 HOST",
      email: "host@gmail.com",
      reason: "HOST",
    },
    {
      profileImage: "/path/to/user1-image.jpg",
      nickname: "내가 바로 신청자",
      email: "gggg@gmail.com",
      reason: "재밌어 보여서 신청했어요!",
    },
    {
      profileImage: "/path/to/user2-image.jpg",
      nickname: "내가 바로 신청자",
      email: "gggg@gmail.com",
      reason: "재밌어 보여서 신청했어요!",
    },
    {
      profileImage: "/path/to/user3-image.jpg",
      nickname: "내가 바로 신청자",
      email: "gggg@gmail.com",
      reason: "재밌어 보여서 신청했어요!",
    },
  ],
};

const MeetingModal = ({ isOpen, onClose, meeting = mockMeeting, onDelete }) => {
  const [activeTab, setActiveTab] = useState("details"); // 현재 활성화된 탭 상태
  const [isDropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 상태

  if (!isOpen || !meeting) return null;

  const handleDelete = () => {
    onDelete(meeting.id); // 모임 ID를 전달하여 삭제 처리
    onClose(); // 모달 닫기
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div
            className="icon-group"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <FaEllipsisV /> {/* 점 3개 아이콘 */}
          </div>
          <h2>정기모임</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes /> {/* X 아이콘 */}
          </button>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleDelete}>모임 삭제</button>
            <button onClick={() => setDropdownOpen(false)}>취소</button>
          </div>
        )}
        <h3>{meeting.meetingName}</h3>

        <div className="meeting-info">
          <div className="info-row">
            <strong>호스트:</strong>
            <span>{meeting.hostNickname}</span>
          </div>
          <div className="info-row">
            <strong>개최 장소:</strong>
            <span>{meeting.location}</span>
          </div>
          <div className="info-row">
            <strong>모집 인원:</strong>
            <span>{meeting.participantCount}명</span>
          </div>
        </div>

        <h4>신청자 리스트</h4>
        <p>(모집 중인 모임)</p>
        <h4>참여자 리스트</h4>
        <p>(모집 마감된 모임)</p>

        <h4>활동 일정</h4>
        <div className="activity">
          <span>1회차:</span>
          <span>{meeting.startDate}</span>
        </div>
        <div className="activity">
          <span>2회차:</span>
          <span>{meeting.endDate}</span>
        </div>

        <div className="images">
          <h4>모임 사진</h4>
          <div className="image-gallery">
            <div className="image-placeholder"></div>
            <div className="image-placeholder"></div>
            <div className="image-placeholder"></div>
            <div className="image-placeholder"></div>
          </div>
        </div>

        <button className="close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default MeetingModal;
