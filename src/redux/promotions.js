import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch(action.type) {   //this will switch on the action.type
        default:
            return state;
    }
}

//reducer file