import styled from "styled-components";

const PageTitle = styled.h1`
font-size: 40px;
margin: 50px;
text-align: center;
text-transform: uppercase;
`

const Container = styled.div`
margin: 50px 165px;
`

const Atom = styled.img`
    width: 1000px;
`

const Title = styled.div`
position: relative;
font-size: 35px;
font-weight: 800;
letter-spacing: 2px;
bottom: 300px;
left: 410px;
`

const ImgOne = styled.img`
    position: relative;
    width: 100px;
    bottom: 170px;
    left: 450px;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`

const ImgTwo = styled.img`
    position: relative;
    width: 100px;
    bottom: 360px;
    left: 10px;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`

const ImgThree = styled.img`
    position: relative;
    width: 100px;
    bottom: 380px;
    left: 600px;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`

const ImgFour = styled.img`
    position: relative;
    width: 100px;
    bottom: 580px;
    left: 160px;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`
export default {
    PageTitle,
    Container,
    Atom,
    Title,
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour
}