/*jshint esversion:6*/
import React, { Component } from "react";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import styled from "styled-components";

const Reapair = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;

  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`;

const LightText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  padding-top: 54px;
`;


const CallBtn = styled.button`
  color: #fff;
  width: 247px;
  height: 67px;
  background-color: #ffa14b;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 32px;
`;


class Main extends React.Component{
  render(){
    return (
      <Row>
        <Col lg={5}>
          <Reapair>
            Качественный ремонт
            <span>iphone за 36 минут и гарантия 1 год</span>
          </Reapair>
          <LightText>Оставьте заявку на бесплатную диагностику без очереди и получите защитное стекло, стоимостью 1000 рублей, с установкой в подарок!</LightText>
          <CallBtn>Оставить заявку</CallBtn>
        </Col>
        <Col lg={6} lgOffset={1}>
          <div>Slider</div>
        </Col>
      </Row>
    )
  }
}

export default Main

