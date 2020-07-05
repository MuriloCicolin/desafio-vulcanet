import React from 'react';

import { Container, Button } from './styles';

interface IHeaderProps {
  selected: boolean;
  handleSelect: () => void;
}

const Header: React.FC<IHeaderProps> = ({ selected, handleSelect }) => {
  return (
    <Container>
      <Button onClick={handleSelect}>
        <div className={selected ? 'selected' : 'white'}>Mensal</div>
        <div className={selected ? 'white' : 'selected'}>Anual</div>
      </Button>
    </Container>
  );
};

export default Header;
