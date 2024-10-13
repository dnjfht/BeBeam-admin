import React, { useState } from 'react';
import './MeetingModal.css'; // 스타일을 위한 CSS 파일
import { FaTimes, FaEllipsisV, FaMapMarkerAlt, FaUser, FaUsers, FaCalendarAlt } from 'react-icons/fa'; // 필요한 아이콘들

// 가짜 데이터 생성
const mockMeeting = {
    id: 1,
    hostNickname: '내가 바로 HOST',
    location: '서울시 강남구',
    participantCount: 4,
    recruitmentStatus: '모집 마감',
    startDate: '2024-10-01',
    endDate: '2024-10-10',
    applicants: [
        {
            profileImage: '/path/to/host-image.jpg',
            nickname: '내가 바로 HOST',
            email: 'host@gmail.com',
            reason: 'HOST',
        },
        {
            profileImage: '/path/to/user1-image.jpg',
            nickname: '내가 바로 신청자',
            email: 'gggg@gmail.com',
            reason: '재밌어 보여서 신청했어요!',
        },
        {
            profileImage: '/path/to/user2-image.jpg',
            nickname: '내가 바로 신청자',
            email: 'gggg@gmail.com',
            reason: '재밌어 보여서 신청했어요!',
        },
        {
            profileImage: '/path/to/user3-image.jpg',
            nickname: '내가 바로 신청자',
            email: 'gggg@gmail.com',
            reason: '재밌어 보여서 신청했어요!',
        },
    ]
};

const MeetingModal = ({ isOpen, onClose, meeting = mockMeeting, onDelete }) => {
    const [activeTab, setActiveTab] = useState('details'); // 현재 활성화된 탭 상태
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
                    <div className="icon-group" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                        <FaEllipsisV /> {/* 점 3개 아이콘 */}
                    </div>
                    <button className="close-button" onClick={onClose}>
                        <FaTimes /> {/* X 아이콘 */}
                    </button>
                </div>

                {/* 탭 메뉴 */}
                <div className="tab-menu">
                    <div 
                        className={`tab ${activeTab === 'details' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('details')}
                    >
                        모임 상세정보
                    </div>
                    <div 
                        className={`tab ${activeTab === 'list' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('list')}
                    >
                        {meeting.recruitmentStatus === '모집 중' ? '신청자 리스트 (모집 중인 모임)' : '참여자 리스트 (모집 마감된 모임)'}
                    </div>
                </div>

                {/* 모임 상세정보 섹션 */}
                {activeTab === 'details' && (
                    <div className="tab-content">
                        <div className="meeting-info">
                            <div className="info-row">
                                <FaUser className="info-icon" /> {/* 호스트 아이콘 */}
                                <div className="info-text">
                                    <strong>호스트 닉네임</strong>
                                    <span>{meeting.hostNickname}</span>
                                </div>
                            </div>
                            <div className="info-row">
                                <FaMapMarkerAlt className="info-icon" /> {/* 개최 장소 아이콘 */}
                                <div className="info-text">
                                    <strong>개최 장소</strong>
                                    <span>{meeting.location}</span>
                                </div>
                            </div>
                            <div className="info-row">
                                <FaUsers className="info-icon" /> {/* 모집 인원 아이콘 */}
                                <div className="info-text">
                                    <strong>모집 인원</strong>
                                    <span>{meeting.participantCount}명</span>
                                </div>
                            </div>
                        </div>

                        {/* 활동 일정 */}
                        <div className="activity-schedule">
                            <h4>활동 일정</h4>
                            <div className="activity-row">
                                <span>1회차:</span>
                                <FaCalendarAlt className="calendar-icon" />
                                <span>{meeting.startDate}</span>
                            </div>
                            <div className="activity-row">
                                <span>2회차:</span>
                                <FaCalendarAlt className="calendar-icon" />
                                <span>{meeting.endDate}</span>
                            </div>
                        </div>

                        {/* 모임 사진 */}
                        <div className="images">
                            <h4>모임 사진</h4>
                            <div className="image-gallery">
                                <div className="image-placeholder"></div>
                                <div className="image-placeholder"></div>
                                <div className="image-placeholder"></div>
                                <div className="image-placeholder"></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 신청자 리스트 섹션 */}
                {activeTab === 'list' && meeting && meeting.applicants && (
                    <div className="tab-content">
                        <div className="applicant-list-header">
                            <span>닉네임</span>
                            <span>신청 사유</span>
                            <span>수락거절여부</span>
                        </div>
                        {meeting.applicants.map((applicant, index) => (
                            <div key={index} className="applicant-item">
                                <div className="checkbox-column">
                                    <input type="checkbox" />
                                </div>
                                <div className="applicant-info">
                                    <img src={applicant.profileImage} alt="profile" className="profile-image" />
                                    <div>
                                        <strong>{applicant.nickname}</strong>
                                        <span>{applicant.email}</span>
                                    </div>
                                </div>
                                <div className="applicant-reason">
                                    <span>{applicant.reason}</span>
                                </div>
                                <div className="approval-dropdown">
                                    <select>
                                        <option value="pending">수락거절여부</option>
                                        <option value="accept">수락</option>
                                        <option value="reject">거절</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                        <div className="action-buttons">
                            <button className="accept-button">수락</button>
                            <button className="reject-button">거절</button>
                        </div>
                    </div>
                )}

                <button className="close-button-bottom" onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default MeetingModal;
