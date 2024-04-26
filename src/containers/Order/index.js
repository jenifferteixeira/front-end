import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Burguer from '../../assets/preparando.png';
import axios from "axios";
import { Container, H1, Image, ContainerItens, Button, User, Trash } from "./styles";


function Order() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers()

  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUser = users.filter(user => user.id !== userId);

    setUsers(newUser);
  }

  function goBack() {
    history.goBack()
  }

  return (
    <Container>
      <Image src={Burguer} />

      <ContainerItens>
        <H1> O restaurante aceitou o seu pedido!</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id} >
              <div> <p>{user.name} - {user.tel}</p>
                <p>{user.order}</p> <p>{user.address}</p>
              </div>

              <Trash onClick={() => deleteUser(user.id)} > 🗑 </Trash>

            </User>
          ))}
        </ul>

        <Button onClick={goBack}> 👈🏻 Voltar </Button>

      </ContainerItens>



    </Container>
  );
}

export default Order;
