
const initialState = {
    section: 1,
    generalData: {
        url: '',
        nombre: ''
    },
    firstData: {
      nombre: '',
      lastName: '',
      email: '',
    },
    secondData: {
      empresa: '',
      sueldo: '',
      antiguedad: ''
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
        case 'STORE_FIRST_DATA':
            return {
                ...state,
                firstData: action.payload
            }
        case 'STORE_SECOND_DATA':
            return {
                ...state,
                secondData: action.payload
            }
        default:
            return state;
    }
}

export default reducer;