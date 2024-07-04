import { Container, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/beefreguglia.png" 
          alt="Imagem de uma pessoa" 
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Bernardo Freguglia</strong>
        </div>
      </Profile>
    </Container>
  )
}