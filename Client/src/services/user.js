import axios from "axios";
import FormData from "form-data"

const createUserService = async (user) => {
    const { profile, fullName, email, password } = user;

    // Create a FormData object
    const formData = new FormData();
    formData.append('avatar', profile[0]);
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);

    const newUser = await axios.post(`${import.meta.env.VITE_URL}api/v1/user/register`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    if (newUser && newUser.data) {
        return newUser.data.data;
    }
    else {
        return Error()
    }
};

const loginUserService = async (user) => {
    const { email, password } = user;
    const loginUser = axios.post(`${import.meta.env.VITE_URL}api/v1/user/login`, {
        email,
        password,
    })
    if (loginUser) {
        return loginUser;
    }
    return console.log("User not found");
}
const getCurrentUser = async (data) => {
    const { email } = data;
    try {
        const res = await axios.post(`${import.meta.env.VITE_URL}api/v1/user/current`, { email });
        return res.data;

    } catch (err) {
        console.log(err);
    }
}

export { createUserService, loginUserService, getCurrentUser };