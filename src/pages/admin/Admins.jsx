import { useState } from 'react';

const data = [
  { id: 1, name: '홍길동', email: 'hong@bebeam.com', phone: '010-1234-5678', joinDate: '2024-10-12' },
  { id: 2, name: '김길동', email: 'kim@bebeam.com', phone: '010-1232-5628', joinDate: '2023-10-12' },
  { id: 3, name: '정길동', email: 'jeong@bebeam.com', phone: '010-1242-5678', joinDate: '2022-11-12' },
  { id: 4, name: '유길동', email: 'yoo@bebeam.com', phone: '010-4321-5678', joinDate: '2024-10-19' }
];

export default function Admins() {
  const [checkedItems, setCheckedItems] = useState([]); // 상태 정의

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id) // 체크 해제 시
        : [...prev, id] // 체크 시
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setCheckedItems(data.map((item) => item.id)); // 전체 선택
    } else {
      setCheckedItems([]); // 전체 해제
    }
  };

  return (
    <div>
      <h2>관리자 리스트</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={checkedItems.length === data.length} // 상태 참조
              />
            </th>
            <th>이름</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.id)} // 상태 참조
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.joinDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}