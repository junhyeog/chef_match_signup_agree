import React, { useEffect } from 'react';
import styled from 'styled-components';

const Index = () => {
    return (
        <BackGround>
            <HeaderBox>
                <Slogan>회원가입</Slogan>
            </HeaderBox>
                <Professional_chef src="/static/professional_chef.png"
                srcSet="/static/professional_chef@2x.png 2x,
                /static/professional_chef@3x.png 3x"
                />
                <ContentTitle>My Private Chef</ContentTitle>
                <ContentSubtitle>셰프의 요리가 우리 집으로!</ContentSubtitle>
        </BackGround>

    )
}

export default Index;


const BackGround = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: block;
`
const HeaderBox = styled.div`
    position: relative;
    width: 100vw;
    height: 52px;
    box-shadow: 0 1px 2px 0
        rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
`
const Slogan = styled.div`
    position: absolute;
    display: block;
    top: 17px;
    left: 50%;
    transform:translate(-50%,0%);
    width: 100px;
    height: 19px;
    font-family: NotoSansCJKKR;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.75;
    letter-spacing: normal;
    text-align: center;
    color: #2b2d30;
`
const Professional_chef=styled.img`
    display: block;
    width: 100vw;
    height: auto;
    object-fit: contain;
`
const ContentTitle=styled.div`
    position: relative                  ;
    top: 32px;
    left: 50%;
    transform:translate(-50%,0%);
    width: 300px;
    height: 39px;
    font-family: Dynalight;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: center;
    color: #003a2b;
`
const ContentSubtitle=styled.div`
    position: relative;
    top: 46px;
    left: 50%;
    transform:translate(-50%,0%);
    width: 200px;
    height: 15px;
     font-family: NotoSansCJKKR;
    font-size: 12px;
     font-weight: normal;
     font-stretch: normal;
     font-style: normal;
     line-height: 1.17;
     letter-spacing: normal;
     text-align: center;
     color: #003a2b;
`