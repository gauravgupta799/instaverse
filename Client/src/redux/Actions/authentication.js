import * as api from "../../api/index";
import { 
    AUTHENTICATION,LOGIN, SIGNUP
} from "../../constants/actionTypes";

const signup = (formValues, navigate) => async(dispatch)=>{
    try {
        const {data} = await api.signup(formValues);
        dispatch({
            type:SIGNUP,
            payload:data
        });
        navigate("/login")
    } catch (error) {
        console.log(error.message);
    }
}

const login = (formValues, navigate) => async(dispatch)=>{
    try {
        const {data} = await api.login(formValues);
        dispatch({
            type:LOGIN,
            payload:data
        });
        navigate("/") 
    } catch (error) {
        console.log(error.message);
    }
}

export {signup, login}