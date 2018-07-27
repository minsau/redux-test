
const initialState = {
    section: 1,
    generalData: {
        url: '',
        nombre: ''
    },
    firstData: {
        campo1: '',
        campo2: '',
    },
    secondData: {
        lista: [],
        idItem: 0
    }
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'CHANGE_SECTION':
            return {
                ...state,
                section: action.section
            }
        case 'STORE_GENERAL_DATA':
            return {
                ...state,
                generalData: action.payload
            }
        default:
            return state;
    }
}

export default reducer;