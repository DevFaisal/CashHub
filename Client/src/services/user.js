import axios from "axios";

const createUserService = async (user) => {
    const { avatar, fullName, email, password } = req.body
    console.log(req.body)
    try {
        const newUser = await axios
            .post(`${import.meta.env.VITE_URL}api/v1/user/register}`, {
                avatar,
                fullName,
                email,
                password,
            });
        if (newUser) {
            return newUser
        }
        return console.log(res);
    } catch (err) {
        return console.log(err);
    }
}

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