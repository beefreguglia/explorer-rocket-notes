import { FiPlus, FiSearch } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Input } from "../../components/Input";


export function Home() {
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li><ButtonText isActive>Todos</ButtonText></li>
        <li><ButtonText>React</ButtonText></li>
        <li><ButtonText>Node</ButtonText></li>
      </Menu>
      <Search>
        <Input 
          icon={<FiSearch size={20} />}
          placeholder="Pesquisar pelo título"
        />
      </Search>
      <Content></Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}