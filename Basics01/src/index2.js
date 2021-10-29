import {
  addRoom,
  bookRoom,
  cancelBooking,
  countRooms,
  fetchRooms,
  showAvailableRooms,
} from './actionCreator';
import store from './store';
import * as rooms from './roomTypes';
/* 
const unsubscribe = store.subscribe(() => {
  console.log('State changed', store.getState());
}); */
window.addRoomOnclick = () => {
  console.log('Clicked');
  store.dispatch(
    addRoom('A big nice luxury room with all facilities', 200, rooms.LUXURY)
  );
  console.log(store.getState());
};
store.dispatch(
  addRoom('A big nice luxury room with all facilities', 200, rooms.LUXURY)
);
store.dispatch(addRoom('A well maintained deluxe Room', 100, rooms.DELUXE));
store.dispatch(addRoom('A standard room in budget', 100, rooms.STANDARD));

store.dispatch(bookRoom(1));
store.dispatch(bookRoom(2));

store.dispatch(cancelBooking(1));
store.dispatch(fetchRooms());
console.log(store.getState());
const availableRooms = showAvailableRooms(store.getState());
console.log(store.getState());
const countRoomsLux = countRooms(store.getState(), rooms.LUXURY);
console.log(availableRooms);
console.log(countRoomsLux);
//store.dispatch(countRooms(rooms.LUXURY));
//console.log(store.getState().length);
// Hotel booking
/*Room store =>
{
    id: 1,
    description: "Luxury Room",
    price: 100,
    isAvailable: true,
    type: Luxury
    booking_id:null/1
}
*/
// Book a room
/*
{
    ...room,
    isAvailable: false
}
*/
// Show avaialble rooms
/*
filter rooms where isAvailable is true
*/

/**
* Actions 
1. BOOK_ROOM
if(available)
{
    type: BOOK_ROOM,
    payload: {
        isAvaialble: false,
        booking_id: 1
    }
}

2. CANCEL_BOOKING
{
    type: CANCEL_BOOKING,
    payload: {
        isAvaialble: true,
        booking_id: null
    }
}
3. SHOW_AVAILABLE_ROOMS
4. ADD_ROOM: {
    id
    type
    isAvailable: true,
    price
    description
}
5. Number of rooms :{
filter on basis of type 
}

 */
