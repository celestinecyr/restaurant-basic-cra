import { COMMENTS } from '../shared/comments';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {   //this will switch on the action.type
        default:
            return state;
    }
}

//reducer file