import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch(action.type) {   //this will switch on the action.type
        default:
            return state;
    }
    //if the state is undefined, we give the initial state/ the default value as dishes that we've imported in line 3
    //if we don't modify it, then will just return the DISHES file
}

//reducer file



