import React from 'react';
import style from './MainDisplayMission.module.css';

export default function MainDisplayMission() {
  return (
    <div className={style.content4 + ' mt-0 mt-sm-0 mt-md-5 mt-lg-5'}>
      <div className={`${style.container} pt-5 pb-4`}>
        <span className={`${style.content4_title} pt-5`}>JIGUSHOP MISSION</span>
        <div className={`row ${style.content4_contents} mt-4 px-3`}>
          <div className={`col-lg me-lg-4 mb-4 p-4 ${style.content4_left}`}>
            <strong className={style.text}>우리가 줄인 플라스틱 제품<br/></strong>
            <span className={`${style.text} ${style.text_value}`}>44,664kg</span>
          </div>
          {/* <!--//네모 1--> */}
          <div className={`col-lg me-lg-4 mb-4 p-4 ${style.content4_midst}`}>
            <strong className={style.text}>우리가 순환한 자원의 양<br/></strong>
            <span className={`${style.text} ${style.text_value}`}>12,084개</span>
          </div>
          {/* <!--//네모 2--> */}
          <div className={`col-lg p-4 mb-4 ${style.content4_right}`}>
            <strong className={style.text}>사회, 환경적 활동 지원 금액<br/></strong>
            <span className={`${style.text} ${style.text_value}`}>17,647,760원</span>
          </div>
          {/* <!--//네모 3--> */}
        </div>
        {/* <!--//네모 모임--> */}
        <div className={`${style.caption} mt-4 h6`}>
          <div className="row">
            <div className="col-4"></div>
            <span className="text-light col-4 ms-auto" style={{ fontSize: '16px', textAlign: 'right' }}>
              *2022년 2월 기준
            </span>
          </div>
        </div>
      </div>
      {/* <!--//container--> */}
    </div>
  );
}
