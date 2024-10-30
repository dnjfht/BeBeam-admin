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

    const [approvalStatus, setApprovalStatus] = useState({
        user1: '',
        user2: '',
        user3: '',
      });
    
      // Function to handle approval status change for each user
      const handleApprovalChange = (user, status) => {
        setApprovalStatus((prevStatus) => ({
          ...prevStatus,
          [user]: status,
        }));
      };

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
                                 {/* 호스트 아이콘 */}
                                <div className="info-text">
                                    <strong>호스트 닉네임</strong>
                                    <span className="styled-location"><FaUser className="info-icon" />{meeting.hostNickname}</span>
                                </div>
                            </div>
                            <div className="info-row">
                                 {/* 개최 장소 아이콘 */}
                                <div className="info-text">
                                    <strong>개최 장소</strong>
                                    <span className="styled-location"><FaMapMarkerAlt className="info-icon" />{meeting.location}</span>
                                </div>
                            </div>
                            <div className="info-row">
                                 {/* 모집 인원 아이콘 */}
                                <div className="info-text">
                                    <strong>모집 인원</strong>
                                    <span className="styled-location"><FaUsers className="info-icon" /> {meeting.participantCount}명</span>
                                </div>
                            </div>
                        </div>

                        {/* 활동 일정 */}
                        <div className="activity-schedule">
                            <h4>활동 일정</h4>
                            <div className="activity-row">
                                <span>1회차:</span>
                                
                                <span className="styled-location"> <FaCalendarAlt className="calendar-icon" />{meeting.startDate}</span>
                            </div>
                            <div className="activity-row">
                                <span>2회차:</span>
                                
                                <span className="styled-location"> <FaCalendarAlt className="calendar-icon" />{meeting.endDate}</span>
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

                {activeTab === 'list' && (
                        <div className="tab-content">
                            <div className="participant-list">
                            <div className="search-bar">
                                <input type="text" placeholder="닉네임을 검색하세요." />
                                <button className="search-btn">
                                <i className="fa fa-search"></i>
                                </button>
                            </div>

                            <div className="table-container">
                                <table>
                                <thead>
                                    <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>닉네임</th>
                                    <th>신청 사유</th>
                                    <th>수락거부여부</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="nickname">
                                        <img src="host.png" alt="profile" className="profile-img" />
                                        내가 바로 HOST <span className="host-badge">HOST</span>
                                        <div className="email">host@gmail.com</div>
                                        </div>
                                    </td>
                                    <td>HOST</td>
                                    <td>HOST</td>
                                    </tr>
                                    <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="nickname">
                                        <img src="applicant.png" alt="profile" className="profile-img" />
                                        내가 바로 신청자
                                        <div className="email">gggg@gmail.com</div>
                                        </div>
                                    </td>
                                    <td>재밌어 보여서 신청했어요!</td>
                                    <td>
                                        <select
                                        value={approvalStatus.user1}
                                        onChange={(e) => handleApprovalChange('user1', e.target.value)}
                                        >
                                        <option value="">수락거절여부</option>
                                        <option value="수락">수락</option>
                                        <option value="거절">거절</option>
                                        </select>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="nickname">
                                        <img src="applicant.png" alt="profile" className="profile-img" />
                                        내가 바로 신청자
                                        <div className="email">gggg@gmail.com</div>
                                        </div>
                                    </td>
                                    <td>재밌어 보여서 신청했어요!</td>
                                    <td>
                                        <select
                                        value={approvalStatus.user2}
                                        onChange={(e) => handleApprovalChange('user2', e.target.value)}
                                        >
                                        <option value="">수락거절여부</option>
                                        <option value="수락">수락</option>
                                        <option value="거절">거절</option>
                                        </select>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="nickname">
                                        <img src="applicant.png" alt="profile" className="profile-img" />
                                        내가 바로 신청자
                                        <div className="email">gggg@gmail.com</div>
                                        </div>
                                    </td>
                                    <td>재밌어 보여서 신청했어요!</td>
                                    <td>
                                        <select
                                        value={approvalStatus.user3}
                                        onChange={(e) => handleApprovalChange('user3', e.target.value)}
                                        >
                                        <option value="">수락거절여부</option>
                                        <option value="수락">수락</option>
                                        <option value="거절">거절</option>
                                        </select>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>

                            <div className="actions">
                                <button className="approve-btn">수락</button>
                                <button className="reject-btn">거절</button>
                            </div>
                            </div>
                        </div>
                        )}

                <button className="close-button-bottom" onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default MeetingModal;
