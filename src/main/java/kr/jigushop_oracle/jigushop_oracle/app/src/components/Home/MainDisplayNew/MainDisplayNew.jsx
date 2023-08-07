import './MainDisplayNew.module.css';

export default function MainDisplayNew() {
    return (
        <div className="content3 container pt-5">
            <div className="row">
                <div className="left col-md-12 col-lg-5 ps-lg-5 pe-0 px-md-3 pb-md-0 ms-4 ms-sm-0 ms-md-0 ms-lg-0">
                    <p># NEW<br /></p>
                    <span className="left_text">지구샵만의 꼼꼼한 기준으로 입고된<br /></span>
                    <span className="left_text">새로운 제로웨이스트 제품을 만나보세요!<br /><br /></span>
                </div>
                <div className="right col-md-12 col-lg-7 m-auto ps-3 ps-sm-0 ps-md-0 pe-0 pe-sm-5 pe-lg-5">
                    <div className="bundry1 pe-5 pb-0 pb-sm-4 pb-md-4 pb-lg-4 mt-0 mt-sm-3 mt-md-0">
                        <div className="right_item 1 col-12 col-sm-4 col-md-4 col-lg-4 mx-3">
                            <a href="goods_detail.php?id=7" className="text-decoration-none">
                                <img className="right_item_img w-100" style={{ display: 'inline' }}
                                    src="./img/goods_plate1.jpg"
                                    // onMouseOver={() => this.src = 'img/goods_plate2.jpg'}
                                    // onMouseOut={() => this.src = 'img/goods_plate1.jpg'}
                                />
                                <div className="h6 pt-3">[탄소창고] 손편한 앞접시 세트(5개입)</div>
                                <div className="right_price">
                                    <p className="right_recent_price">15,000원</p>
                                </div>
                                <div className="right_icon">
                                    <div className="NEWicon">NEW</div>
                                </div>
                            </a>
                        </div>
                        <div className="right_item 2 col-12 col-sm-4 col-md-4 col-lg-4 mx-3">
                            <a href="goods_detail.php?id=8" className="text-decoration-none">
                                <img className="right_item_img w-100" style={{ display: 'inline' }}
                                    src="./img/goods_grainpowder1.jpg"
                                    // onMouseOver={() => this.src = 'img/goods_grainpowder2.jpg'}
                                    // onMouseOut={() => this.src = 'img/goods_grainpowder1.jpg'}
                                />
                                <div className="h6 pt-3">[곡물집] 로스티드 그레인 파우더</div>
                                <div className="right_price">
                                    <p className="right_recent_price">3,000원</p>
                                </div>
                                <div className="right_icon">
                                    <div className="NEWicon">NEW</div>
                                    <div className="BESTicon">BEST</div>
                                </div>
                            </a>
                        </div>
                        <div className="right_item 3 col-12 col-sm-4 col-md-4 col-lg-4 mx-3">
                            <a href="goods_detail.php?id=9" className="text-decoration-none">
                                <img className="right_item_img w-100" style={{ display: 'inline' }}
                                    src="./img/goods_probiotics1.jpg"
                                    // onMouseOver={() => this.src = 'img/goods_probiotics2.jpg'}
                                    // onMouseOut={() => this.src = 'img/goods_probiotics1.jpg'}
                                />
                                <div className="h6 pt-3">[빌리스벳] 프로바이오틱스 원 395</div>
                                <div className="right_price">
                                    <p className="right_recent_price">29,000원</p>
                                </div>
                                <div className="right_icon">
                                    <div className="NEWicon">NEW</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}