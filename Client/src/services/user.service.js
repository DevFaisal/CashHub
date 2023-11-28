import axios from "axios";
import FormData from "form-data";

const createUserService = async (user) => {
    const { profile, fullName, email, password } = user;

    const formData = new FormData();
    formData.append('avatar', profile[0]);
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);

    try {
        const newUser = await axios.post(`${import.meta.env.VITE_URL}api/v1/user/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (newUser && newUser.data) {
            return newUser.data.data;
        } else {
            throw new Error();
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const loginUserService = async (user) => {
    const { email, password } = user;
    try {
        const loginUser = await axios.post(`${import.meta.env.VITE_URL}api/v1/user/login`, {
            email,
            password,
        }, { withCredentials: true });
        console.log(loginUser);
        return loginUser;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};


const getCurrentUser = async (data) => {
    const { email } = data;
    try {
        const res = await axios.post(`${import.meta.env.VITE_URL}api/v1/user/current`, { email }, { withCredentials: true });
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

export { createUserService, loginUserService, getCurrentUser };
