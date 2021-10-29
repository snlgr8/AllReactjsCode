import React from 'react';
import { SwipeableFlatList } from 'react-native-swipeable-lists';
import UserItem from './user-item';

const UserList = ({ users }) => {
  return (
    <SwipeableFlatList
      data={users}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={UserItem}
    />
  );
};

export default UserList;
