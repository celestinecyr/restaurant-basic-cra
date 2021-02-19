import { LEADERS } from '../shared/leaders';

export const Leaders = (state = LEADERS, action) => {
    switch(action.type) {   //this will switch on the action.type
        default:
            return state;
    }
}

//reducer file