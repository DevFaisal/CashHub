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
        const response = await axios.post(
            `${import.meta.env.VITE_URL}api/v1/user/register`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        if (response && response.data) {
            return response.data.data;
        } else {
            throw new Error("Failed to create user");
        }
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

const loginUserService = async (user) => {
    const { email, password } = user;

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_URL}api/v1/user/login`,
            { email, password },
            { withCredentials: true }
        );

        console.log(response);
        return response;
    } catch (error) {
        console.error("Error logging in:", error.response.data);
        throw error;
    }
};

const getCurrentUser = async (data) => {
    const { email } = data;

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_URL}api/v1/user/current`,
            { email },
            { withCredentials: true }
        );

        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error getting current user:", error.response.data);
        throw error;
    }
};

export { createUserService, loginUserService, getCurrentUser };
