import ClassifyAtom from '../../assets/images/CLASSIFY.png'
import S from '../../assets/styles/aplicationstyle'
import One from '../../assets/images/1.png'
import Two from '../../assets/images/2.png'
import Three from '../../assets/images/3.png'
import Four from '../../assets/images/4.png'


export const Aplication = () => {
    return (
        <>
        <S.PageTitle>Escolha seu artista</S.PageTitle>
            <S.Container>
                <S.Atom src={ClassifyAtom} alt="" />
                <S.Title>CLASSIFY</S.Title>
                <S.ImgOne src={One} alt="" />
                <S.ImgTwo src={Two} alt="" />
                <S.ImgThree src={Three} alt="" />
                <S.ImgFour src={Four} alt="" />
            </S.Container>
        </>

    )
}