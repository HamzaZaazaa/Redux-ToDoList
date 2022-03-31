import { ADD_TASK, DELETE_TASK, DONE, EDIT_TASK } from "./types"

const initialeState = {
    tasks: [
        {
            id: 1,
            text:"Learn something",
            process: false,
        },
        {
            id: 2,
            text:"Learn something else",
            process: false,
        }
    ]
}
function toDoReducer(state=initialeState, action) {
    switch(action.type){
        case DONE: return {
            ...state, tasks:state.tasks.map(tasks=>
            tasks.id ===action.payload ? 
            {...tasks,process:!tasks.process}: tasks),};

        case DELETE_TASK: return {
            ...state, tasks: state.tasks.filter(task =>task.id !== action.payload)
        }
        case EDIT_TASK: return {
            ...state, tasks:state.tasks.map(task=>
                task.id ===action.payload.id ? 
                {...task,text: action.payload.text} : task)
        }
        case ADD_TASK: return {
             ...state, tasks:[...state.tasks, {
                 id:Math.random(),  process:false, text:action.payload}]
        }



        default: return state;
 }

}

export default toDoReducer