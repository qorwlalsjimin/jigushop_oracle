import React from 'react';

function BoardList() {
    const exampleData = [
        // Example data rows, replace with actual data
        {
            n_no: 1,
            title: '예시 제목 1',
            author: '예시 글쓴이 1',
            timestamp: '예시 작성시간 1'
        },
        {
            n_no: 2,
            title: '예시 제목 2',
            author: '예시 글쓴이 2',
            timestamp: '예시 작성시간 2'
        },
        // Add more data rows as needed
    ];

    return (
        <div>
            <div className="container text-center mt-5 mx-5 px-4">
                <p className="col align-self-center">문의하기</p>
            </div>

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
                        {exampleData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.n_no}</td>
                                <td><a href="#" className="text-decoration-none" style={{ color: 'black' }}>{row.title}</a></td>
                                <td>{row.author}</td>
                                <td>{row.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="row">
                    <a className="col text-end text-decoration-none" href="#"><span className="me-5">글쓰기</span></a>
                </div>
            </div>
        </div>
    );
}

export default BoardList;
