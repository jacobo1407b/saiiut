import { createStore } from "redux";
import {PATH_AUTH,PATH_REDIRECT,USER,MODAL_INITIAL} from './variales';

const initialState = {
    pathRedirect:"/index/alumnos",
    pathAuth:"/index/alumnos/dashboard",
    modal:{
        child:null,
        title:"",
        open:false
    },
    user:{
        token:null,
        role:null
    }
}

function updateState(state = initialState, action){
    switch (action.type) {
        case PATH_REDIRECT:
            return{
                ...state,
                pathRedirect: action.payload
            }
        case PATH_AUTH:
            return{
                ...state,
                pathAuth:action.payload
            }
        case MODAL_INITIAL:
            return{
                ...state,
                modal:action.payload
            }
        case USER :
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
};

const store =createStore(
    updateState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)
export default store;