import * as S from './styles'

const Main = ({
  title = 'Edital Vertical',
  description = 'TypeScript, ReactJS, NextJS, e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.png" alt="Imagem da logo do Edital Vertical" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/PC.jpg"
      alt="Imagem da logo do Edital Vertical"
    ></S.Illustration>
  </S.Wrapper>
)

export default Main
