import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus link úteis</p>
        <h2>Faça seu login</h2>
        <Input 
          placeholder="E-mail"
          type="text"
          icon={<FiMail size={20} />}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={<FiLock size={20} />}
        />
        <Button>Entrar</Button>
        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  );
}