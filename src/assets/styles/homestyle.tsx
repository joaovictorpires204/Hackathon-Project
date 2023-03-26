import styled from "styled-components";

const HomeStyle = styled.div`
    margin: 100px 120px; 
`

const HomeTitleStyle = styled.h1`
    text-align: center;
    font-size: 35px;
`

const HomeTextStyle = styled.p`
width: 1100px;
text-align: center;
font-size: 20px;
`

const Btn = styled.button`
background-color: black;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
        transform: scale(1.1);
    }
`

export default {
    HomeStyle,
    HomeTitleStyle,
    HomeTextStyle,
    Btn
}