import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';


export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    //createStore takes 2 parameters

    return store;
}