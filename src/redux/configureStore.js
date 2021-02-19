import { createStore, combineReducers } from 'redux';        //combine the 4 reducers
import { Dishes } from './dishes';
import { Comments } from './comments'
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,          //dishes managed by Dishes
            comments: Comments,       //comments managed by Comments
            promotions: Promotions,
            leaders: Leaders
        })
        //combineReducers will take the Reducer mapping object and then that will map the overall smaller
        //simpler Reducer functions into various properties in the whole ground
        //Here^ we have recomposed the global state for our application as shown here
    );
    //createStore takes 2 parameters, default return from reducer here bc no action supplied (Reducer and InitialState)

    return store;
}