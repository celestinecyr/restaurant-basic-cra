import { DISHES } from '../shared/dishes';              //has to be ../ we go one level up, then into the shared folder
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
//move these things here ^ because here is where we will set up our state

export const initialState = {       //js object
    dishes: DISHES,           //js object (dishes): DISHES
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

//to create our first reducer function we will export the reducer from here
export const Reducer = (state = initialState, action) => {
//reducer receives the current state and an action
//we cant modify directly in the reducer, can only do an immutable change and return updated version of the state from this reducer
    return state;           //we have nothing to change now so just return state
};
/* we'll also make use of ES6 way of specifying a default value for a parameter
When the Reducer is called initially, at the start of our application the state will be uninitialised.
When our application is started we want to initialise our state to the initial state that we specified earlier
ie dishes comments promo and ldrs. so we use ES6 way of defining functions where we can specify the default value of 
a parameter^ state = initialState.*/

/*When Reducer is first called by store, store have no state. State uninitialised and undefined.
to avoid that, we say if undefined, default is initial state (which we defined earlier)*/