import { useEffect, useRef, useState } from 'react'
import { Student } from '../interface/Student'

const App = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>('all');

  // 用來獲取所有學生資料
  useEffect(() => {
    if (selectedMenu === 'all') {
      fetch('/controller/findAll') // 假設後端提供該 API 路徑
        .then((res) => res.json())
        .then((data) => setStudents(data));
    }
  }, [selectedMenu]);

  return (
    <div style={{ display: 'flex' }}>
      {/* 左側選單 */}
      <div style={{ width: '200px', padding: '20px', borderRight: '1px solid #ddd' }}>
        <button onClick={() => setSelectedMenu('all')}>全部學生</button>
        <button onClick={() => setSelectedMenu('add')}>新增</button>
        <button onClick={() => setSelectedMenu('search')}>查詢</button>
      </div>

      {/* 右側內容區塊 */}
      <div style={{ flex: 1, padding: '20px' }}>
        {selectedMenu === 'all' && (
          <div>
            <h2>所有學生</h2>
            <table>
              <thead>
                <tr>
                  <th>學生姓名</th>
                  <th>學號</th>
                  <th>系別</th>
                  <th>年級</th>
                  <th>班級</th>
                  <th>電子郵件</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.sid}</td>
                    <td>{student.department}</td>
                    <td>{student.grade}</td>
                    <td>{student.class}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 其他功能可以根據需求進行填充 */}
        {selectedMenu === 'add' && <div>新增學生的頁面</div>}
        {selectedMenu === 'search' && <div>查詢學生的頁面</div>}
      </div>
    </div>
  );
};

export default App;
