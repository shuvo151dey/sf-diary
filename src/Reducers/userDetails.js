const initialState = [];

export default function (state = initialState, action) {
    switch(action.type){
        case 'ADD_USER_DETAILS':
            return action.payload;
        default:
            return state;
    }
}