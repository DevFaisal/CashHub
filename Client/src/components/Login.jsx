import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { regImage } from "../assets/images";
import { Link, useNavigate } from 'react-router-dom'
import { loginUserService, getCurrentUser } from "../services/user.service";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../store/authStore";


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const authState = useSelector((state) => state.auth);

    const login = async (data) => {
        if (data.email.length < 4 && !data.password.length < 4) {
            setError("Please fill in all fields");
            return;
        }
        console.log(data)
        setError("");
        try {
            setLoading(true);

            // Check if the user is authenticated
            const session = await getCurrentUser(data);

            if (session) {
                // If authenticated, proceed with login
                const userData = await loginUserService(data);

                if (userData) {
                    dispatch(authLogin(userData.data));
                    setLoading(false);
                    navigate("/home");
                } else {
                    // Handle case where user data is not available
                    setLoading(false);
                    setError("Failed to retrieve user data");
                }
            } else {
                // Handle case where authentication fails
                setLoading(false);
                setError("Invalid Credentials");
            }
        } catch (error) {
            // Handle any unexpected errors
            setLoading(false);
            console.log(error)
            setError(error.response?.data || "An error occurred");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen text-white">
                <div className="flex md:flex-row flex-col justify-center items-center rounded-md bg-white overflow-hidden">
                    <div className="border-1 hidden md:flex border-white">
                        <img
                            className="rounded-l-md h-1/2 w-96 overflow-hidden object-contain"
                            src={regImage}
                            alt="Registration"
                        />
                    </div>
                    <form onSubmit={handleSubmit(login)}>
                        <div className="flex justify-center flex-col gap-4 p-10 rounded-r-md bg-[#284B63] h-96 w-96">
                            <h1 className="text-3xl font-bold text-center">Login</h1>
                            <Input type="email" placeholder="Email" {...register("email")} />
                            <Input
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                            />
                            <Button
                                type="submit"
                                children={loading ? "Loading..." : "Login"}
                                textColor="text-black"
                                className="font-semibold"
                            />
                            <p className="text-sm text-gray-300 font-semibold text-center">
                                Not a member? <span className="text-red-400"> <Link to={"/signup"}>Register now</Link> </span>
                            </p>
                            {error && (
                                <p className="text-center px-4 py-2 text-red-600 rounded-lg mb-4 font-semibold">
                                    {error}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
