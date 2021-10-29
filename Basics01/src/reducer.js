import * as actions from './actionTypes';

let bookingId = 0;
let roomId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_ROOM:
      return [
        ...state,
        {
          id: ++roomId,
          description: action.payload.description,
          isAvailable: true,
          price: action.payload.price,
          type: action.payload.type,
        },
      ];
    case actions.BOOK_ROOM:
      return state.map((room) =>
        room.id !== action.payload.id
          ? room
          : room.isAvailable && {
              ...room,
              isAvailable: false,
              bookingId: ++bookingId,
            }
      );
    case actions.CANCEL_BOOKING:
      return state.map((room) =>
        room.bookingId !== action.payload.bookingId
          ? room
          : {
              ...room,
              isAvailable: true,
              bookingId: null,
            }
      );
    case actions.FETCH_ROOMS:
      return state;

    default:
      return state;
  }
}
