import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
    const [boardData, setBoardData] = useState([]);

    useEffect(() => {
        // API 요청
        axios.get('/api/board/')
            .then(response => {
                setBoardData(response.data); // 응답 데이터를 state에 설정
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching board data:', error);
            });
    }, []);

    return (
        <div>

            <div className="notice_list container">
                <table className="table">
                    <thead>
                        <tr>
                            <th><small className="text-secondary lead" style={{ fontSize: '0.8em' }}>NO</small></th>
                            <th className="text-center" style={{ width: '40em' }}><small className="text-secondary lead" style={{ fontSize: '0.8em' }}>제목</small></th>
                            <th><small className="text-secondary lead" style={{ fontSize: '0.8em' }}>글쓴이</small></th>
                            <th><small className="text-secondary lead" style={{ fontSize: '0.8em' }}>작성시간</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.boardId}</td>
                                <td><Link to={`/board/${row.boardId}`} className='text-decoration-none text-secondary'>{row.title}</Link></td>
                                <td>{row.nickname}</td>
                                <td>{row.boardTimestamp.substr(0, 10)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="row">
                    <Link to="/board/write"><span className='float-end'>글쓰기</span></Link>
                </div>
            </div>
        </div>
    );
}

export default BoardList;
