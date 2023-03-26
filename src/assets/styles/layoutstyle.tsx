import styled from "styled-components";

const LayoutStyle = styled.div`
`
const MenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 100%;
    height: 90px;
`

const LogoStyle = styled.img`
    width: 90px;
    height: 90px;
    margin-left: 150px;
`

const OptionsStyle = styled.div`
display: flex;
gap: 30px;
margin-right: 150px;
text-decoration: none;
`

const OptionStyle = styled.div`
color: white;
text-decoration: none;

&:hover{
    transform: scale(1.2);
    text-decoration: none;
}
`

export default {
    LayoutStyle,
    MenuStyle,
    LogoStyle,
    OptionsStyle,
    OptionStyle
}