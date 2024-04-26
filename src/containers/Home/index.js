import React, { useState, useRef} from "react";
import Burguer from '../../assets/burger 1.png';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, } from "./styles";


function App() {
  const [users, setUsers] = useState([]);
  const name = useRef();
  const tel = useRef();
  const order = useRef();
  const address = useRef();
  const history = useHistory();

  async function addNewOrder() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: name.current.value,
      tel: tel.current.value,
      order: order.current.value,
      address: address.current.value,
    });

    setUsers([...users, newUser]);
    history.push("/orders")
  }


  return (
    <Container>
      <Image src={Burguer} />

      <ContainerItens>
        <H1> Faça seu pedido!</H1>
        <InputLabel > Nome </InputLabel>
        <Input ref={name} placeholder="Digite teu nome" />

        <InputLabel > Telefone</InputLabel>
        <Input ref={tel} placeholder="Digite teu telefone para contato" />

        <InputLabel > Pedido </InputLabel>
        <Input ref={order} placeholder="Sugestão da casa: X-Tudão, Coca-Cola zero" />

        <InputLabel > Endereço </InputLabel>
        <Input ref={address} placeholder="Digite o endereço para entrega" />

        <Button onClick={addNewOrder}> Confirmar pedido ✔ </Button>

      </ContainerItens>
    </Container>
  );
}

export default App;
