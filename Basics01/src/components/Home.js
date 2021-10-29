import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

import { Rooms } from './rooms/Rooms';

export const Home = () => {
  return (
    <Layout>
      <Link to='/addRoom'>Add Room</Link>
    </Layout>
  );
};
