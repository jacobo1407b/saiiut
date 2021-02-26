import {USER} from '../variales';
export const setUser = (data) => {
    return {
      type: USER,
      payload: data,
    };
  };