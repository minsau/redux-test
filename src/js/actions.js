import { STORE_GENERAL_DATA, CHANGE_SECTION } from './action-types';

export const storageGeneralData = (data) => {
    return {
        type: STORE_GENERAL_DATA,
        payload: data
    }
}

