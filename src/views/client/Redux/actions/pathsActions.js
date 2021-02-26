import {PATH_REDIRECT,PATH_AUTH} from '../variales';

export const setRedirectPath =(data)=>{
    return{
        type: PATH_REDIRECT,
        payload: data
    }
}

export const setPathAuth =(data)=>{
    return {
        type:PATH_AUTH,
        payload: data
    }
}

