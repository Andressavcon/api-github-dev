import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import gitHubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = React.useState('');

  return (
    <Container>
      <Logo src={gitHubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
