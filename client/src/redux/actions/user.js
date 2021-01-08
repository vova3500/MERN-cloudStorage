import {authAPI} from "../../api"

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
});

export const logout = () =>({
    type: "LOGOUT"
})

export const registration = (email,password) => async (dispatch) => {
    try{
        let response = await authAPI.registration(email,password);
        console.log(response);
    }
    catch (e){

        console.log("error");
    }
};

export const login = (email,password) => async (dispatch) => {
    try{
        let response = await authAPI.login(email,password);
        console.log(response);
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    }
    catch (e){

        console.log("error");
    }
};