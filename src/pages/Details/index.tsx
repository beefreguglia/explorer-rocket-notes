import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container, Links } from "./styles";


export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText>Excluir nota</ButtonText>
      <Section title="links">
        <Links>
          <li><a href="#">http://www.rocketseat.com.br</a></li>
          <li><a href="#">http://www.rocketseat.com.br</a></li>
        </Links>
      </Section>
      <Section title="marks">
        <Tag>express</Tag>
        <Tag>node</Tag>
      </Section>
      <Button>
        voltar
      </Button>
    </Container>
  )
}