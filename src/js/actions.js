import { STORE_GENERAL_DATA, CHANGE_SECTION, STORE_FIRST_DATA, STORE_SECOND_DATA } from './action-types';

export const storageGeneralData = (data) => {
    return {
        type: STORE_GENERAL_DATA,
        payload: data
    }
}

export const storageFirstData = (data) => {
  return {
      type: STORE_FIRST_DATA,
      payload: data
  }
}

export const storageSecondData = (data) => {
  return {
      type: STORE_SECOND_DATA,
      payload: data
  }
}

export const changeSection = (section) => {
  return {
    type: CHANGE_SECTION,
    section
  }
}

