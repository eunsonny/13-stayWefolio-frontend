import React, { Component } from "react";
import "../infosContainer/InfosContainer.scss";

export class InfosContainer extends Component {
  render() {
    return (
      <div className="InfosContainer">
        <div className="date">
          <span className="title">예약일</span>
          <div className="checkDatesWrap">
            <div className="checkIn">체크인</div>
            <div className="checkOut">체크아웃</div>
          </div>
        </div>
        <div className="name">
          <span className="title">이름</span>
          <input type="text"></input>
        </div>
        <div className="contactNum">
          <span className="title">연락처</span>
          <input type="text"></input>
        </div>
        <div className="email">
          <span className="title">이메일</span>
          <input type="text"></input>
        </div>
        <div className="people">
          <span className="title">인원(최대 2명)</span>
        </div>
        <div className="option">
          <span className="title">추가/옵션 선택</span>
          <div className="miniOption">조식, 픽업</div>
        </div>
        <div className="request">
          <span className="title">요청사항</span>
          <textarea></textarea>
        </div>

        <div className="price">
          <span className="title">Total</span>
          <div className="totalDetail">
            <div className="roomPrice">
              <span className="priceTitle">객실요금</span>
              <span className="price">-</span>
              <span className="won">원</span>
            </div>

            <div className="optionPrice">
              <span className="priceTitle">추가옵션</span>
              <span className="price">-</span>
              <span className="won">원</span>
            </div>

            <div className="discountPrice">
              <span className="priceTitle">할인금액</span>
              <span className="price">-</span>
              <span className="won">원</span>
            </div>

            <div className="totalPrice">
              <span className="priceTitle">총 결제금액</span>
              <span className="price">-</span>
              <span className="won">원</span>
            </div>
          </div>
        </div>
        <div className="payTool">
          <span className="title">결제정보</span>
          <div className="toolOption">네이버페이, 신용카드, 페이팔</div>
        </div>
      </div>
    );
  }
}

export default InfosContainer;