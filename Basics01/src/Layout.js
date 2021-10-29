import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import { h1, pullRight } from './layout.css';
const Layout = ({ children }) => {
  return (
    <Container>
      <Link to='/'>
        <Header as='h1' className={h1}>
          Hotel Booking
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name='heart' color='red' /> by Sonal
      </p>
    </Container>
  );
};

export default Layout;
