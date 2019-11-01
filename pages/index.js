import React, { useEffect } from 'react';
import styled from 'styled-components';

const Index = () => {
    return (
        <BackGround>
            <HeaderBox>
                <Slogan>회원가입</Slogan>
                {/* X 표시 */}
            </HeaderBox>
            <Professional_chef src="/static/professional_chef.png" srcSet="/static/professional_chef@2x.png 2x,/static/professional_chef@3x.png 3x" />

            <ContentTitle>My Private Chef</ContentTitle>
            <ContentSubtitle>셰프의 요리가 우리 집으로!</ContentSubtitle>

            <CheckBoxContainer style={{ top: "54px" }}>
                <CheckBox type="checkbox" id="term1" />
                <Label htmlFor="term1">마프셰 이용약관 동의</Label>
            </CheckBoxContainer>
            <CheckBoxContainer style={{ top: "99px" }}>
                <CheckBox type="checkbox" id="term1" />
                <Label htmlFor="term1">전자금융거래 이용약관 동의</Label>
            </CheckBoxContainer>
            <CheckBoxContainer style={{ top: "139px" }}>
                <CheckBox type="checkbox" id="term1" />
                <Label htmlFor="term1">개인정보 수집이용 동의</Label>
            </CheckBoxContainer>
            <CheckBoxContainer style={{ top: "179px" }}>
                <CheckBox type="checkbox" id="term1" />
                <Label htmlFor="term1">나는 만 14세 이상입니다.</Label>
            </CheckBoxContainer>
            <CheckBoxContainer style={{ top: "219px" }}>
                <CheckBox type="checkbox" id="term1" />
                <Label htmlFor="term1">(선택) 마케팅 정보 수신동의</Label>
            </CheckBoxContainer>

            <NavBar>
                <NavSlogan>다음으로</NavSlogan>
            </NavBar>


        </BackGround>

    )
}

export default Index;


const BackGround = styled.div`
            width: 100vw;
            height: 100vh;
            background-color: #ffffff;
        `
const HeaderBox = styled.div`
            position: absolute;
            top:0px;
            width: 100%;
            height: 52px;
            box-shadow: 0 1px 2px 0
                rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
        `
const Slogan = styled.div`
            position: absolute;
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
const Professional_chef = styled.img`
            display: block;
            width: 100%;
            height: auto;
            object-fit: contain;
        `
const ContentTitle = styled.div`
            position: relative;
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
const ContentSubtitle = styled.div`
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

const CheckBoxContainer = styled.div`
    position: relative;
    left: 50%;
    top: 100px;
    transform:translate(-50%,0%);
`
const CheckBox = styled.input`
    display: none;
`
const Label = styled.label`
    padding-left:25px;
    cursor: pointer;
    &::before {
        content: "";
        width: 24px;
        height: 24px;
        margin-right: 10px;
        position: absolute;
        left: 0;
        border-radius: 2px;
        background-color: #0d6412;
    }
`
const NavBar = styled.div`
    position: absolute;
    bottom: 0px;    
    width: 100vw;
    height: 66px;
    background-color: #0d6412;
`

const NavSlogan = styled.div`
            position: absolute;
            top: 24px;
            left: 50%;
            transform:translate(-50%,0%);
            width: 100px;
            height: 24px;
            font-family: NotoSansCJKKR;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.2;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
`