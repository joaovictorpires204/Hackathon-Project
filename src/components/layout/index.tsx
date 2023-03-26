import S from '../../assets/styles/layoutstyle'
import Logo from '../../assets/images/logo-2.jpg'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <S.LayoutStyle>
            <S.MenuStyle>
                <Link to="/">
                <S.LogoStyle src={Logo} alt="" />
                </Link>
                <S.OptionsStyle>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}><S.OptionStyle>HOME</S.OptionStyle></Link>
                    <Link to="/sobre-nos" style={{ color: 'white', textDecoration: 'none' }}><S.OptionStyle>SOBRE NÓS</S.OptionStyle></Link>
                    <Link to="/application" style={{ color: 'white', textDecoration: 'none' }}><S.OptionStyle>APLICAÇÃO</S.OptionStyle></Link>
                </S.OptionsStyle>
            </S.MenuStyle>

            <Outlet  />
        </S.LayoutStyle>
    )
}