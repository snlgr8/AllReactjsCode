import * as actions from './actionTypes';
export const addRoom = (description, price, type) => {
  return {
    type: actions.ADD_ROOM,
    payload: {
      description,
      price,
      type,
    },
  };
};

export const bookRoom = (id) => {
  return {
    type: actions.BOOK_ROOM,
    payload: {
      id,
    },
  };
};

export const cancelBooking = (bookingId) => {
  return {
    type: actions.CANCEL_BOOKING,
    payload: {
      bookingId,
    },
  };
};

export const showAvailableRooms = (rooms) => {
  return rooms.filter((room) => room.isAvailable).length;
};

export const fetchRooms = () => {
  return { type: actions.FETCH_ROOMS };
};
export const countRooms = (rooms, type) => {
  return rooms.filter((room) => room.type === type).length;
};
