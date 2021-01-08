import {diskAPI} from "../../api"

export const setFiles = (files) => ({
    type: "SET_FILES",
    payload: files,
});

export const setCurrentDir = (dir) => ({
    type: "SET_CURRENT_DIR",
    payload: dir,
});


export const addFile = (file) => ({
    type: "ADD_FILE",
    payload: file,
});

export const getFiles = (driId) => async (dispatch)=>{
    try {
        const response = await diskAPI.getFiles(driId);
        dispatch(setFiles(response.data))
    } catch (error) {
        console.log(error.response);
    }
}

export const createDir = (driId,name) => async (dispatch)=>{
    try {
        const response = await diskAPI.createDir(driId,name);
        console.log(response);
        dispatch(addFile(response.data))
    } catch (error) {
        console.log(error);
    }
}