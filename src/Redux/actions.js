import { DELETE_TASK, DONE, EDIT_TASK, ADD_TASK } from "./types"



export const done=(id)=> {
    return {
        type: DONE,
        payload: id,
    }
}
export const deletetask=(id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}
export const Edit=(id, text)=> {
    return {
        type: EDIT_TASK,
        payload: {
            id, text
        }
    }
}
export const addTask=(text)=> {
    return {
        type: ADD_TASK,
        payload: text,
        
    }
}