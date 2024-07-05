import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/Textarea";
import { Container, Form } from "./styles";

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input 
            placeholder="Título"
          />
          <TextArea placeholder="Observações"></TextArea>
          <Section title="Link úteis">
            <NoteItem value="http://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>
        </Form>
      </main>
    </Container>
  )
}