const initialState = [];

export default function (state = initialState, action) {
    switch(action.type){
        case 'ADD_COMPANY_DATA':
            return action.payload;
        default:
            return state;
    }
}