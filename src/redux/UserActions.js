import axios from "axios";

import { postUser } from "./UserSlice";

export const postUserToBack = (user) => {
    return async (dispatch) => {
    
        let newUser = {};
    
        if (user.sub && user.sub.includes('google')) {
            newUser = {
            name: user.given_name,
            nickname: user.nickname,
            email: user.email,
            picture: user.picture,
            emailVerified: user.email_verified
            };
        } else {
            newUser = {
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            picture: user.picture,
            emailVerified: user.email_verified
            };
        }
            const { data } = await axios.post("/user", newUser);
            
            const currentUser = data;

        dispatch(postUser(currentUser));
    }
}