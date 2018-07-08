import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  info: {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost"
  }
}

export default createStore(reducer, initialState);
