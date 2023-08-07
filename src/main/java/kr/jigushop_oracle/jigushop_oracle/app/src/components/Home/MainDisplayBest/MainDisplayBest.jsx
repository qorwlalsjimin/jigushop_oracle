import React from 'react';
import './MainDisplayBest.module.css';

export default function MainDisplayBest() {
  return (
    <div className="content1 container mt-5">
      <div className="row">
        <div className="left col-lg-5 col-md-12 ps-2 ps-lg-5 pe-0 p-md-3 mb-md-5">
          <div className="left_texts col-5 col-sm-5 col-md-4 col-lg-12 ms-4 ms-sm-0 ms-md-0 ms-lg-0">
            <p># BEST<br/></p>
            <span className="left_text">제로웨이스트 입문자도<br/></span>
            <span className="left_text">어려움 없이 사용할 수 있는<br/></span>
            <span className="left_text">베스트 제품!<br/><br/></span>
          </div>
          <div className="left_img col-7 col-sm-7 col-md-8 col-lg-12 mb-md-0 mb-sm-0">
            <img src="https://cdn.imweb.me/thumbnail/20220304/e7edd6d6a102d.jpg" className="rounded-circle w-100" alt="Product"/>
          </div>
        </div>
        {/* <!--//content1 left--> */}
        <div className="right col-lg-7 col-md-12 m-auto ps-3 ps-sm-0 ps-md-0 pe-0 pe-sm-5 pe-lg-5">
          <div className="bundry1 pe-5 pb-4 mt-0 mt-sm-3 mt-md-0 ">
            <div className="right_item 1 col-12 col-sm-4 col-md-4 col-lg-4  mx-3">
              <a href="goods_detail.php?id=1" className="text-decoration-none">
                <img className="right_item_img 1 w-100" style={{ display: "inline" }} src="./img/goods_gloves1.jpg" alt="Product"
                //   onMouseOver={() => {this.src=`img/goods_gloves2.jpg`}}
                //   onMouseOut={() => {this.src=`img/goods_gloves1.jpg`}}
                />
                <div className="h6 pt-3">[러버랩] 고무장갑 팔목라인</div>
                <div className="right_price">
                  <p className="right_recent_price">2,000원</p>
                </div>
                {/* <!--//right_price--> */}
                <div className="right_icon">
                  <div className="NEWicon">NEW</div>
                </div>
                {/* <!--right_icon--> */}
              </a>
            </div>
            {/* <!--//right_item--> */}
            {/* Add other right items here */}
          </div>
          {/* <!--//bundery1--> */}
          <div className="bundry2 pe-5">
            {/* Add other right items here */}
          </div>
          {/* <!--//bundery2--> */}
        </div>
        {/* <!--//right--> */}
      </div>
    </div>
  );
}
