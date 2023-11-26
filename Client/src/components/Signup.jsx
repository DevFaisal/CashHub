import React, { useEffect, useState } from "react";
import Button from "./button";
import Input from "./input";
import { useForm } from "react-hook-form";
import { createUserService, loginUserService, getCurrentUser } from "../services/user";
import { avatar, regImage } from "../assets/images";
// import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState(avatar)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setProfile(imageUrl);
        }
    };

    const registerUser = async (data, event) => {
        event.preventDefault()
        console.log(data)
        setError("")
        try {
            const session = await getCurrentUser(data);
            console.log(session)
            if (!session) {
                const newUser = await createUserService(data)
            }

        } catch (error) {
            setError(error)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen m-12 text-white">
                <div className="flex md:flex-row flex-col justify-center items-center rounded-md bg-white overflow-hidden">
                    <div className="border-1 hidden md:flex border-white">
                        <img className="rounded-l-md h-1/2 w-96 overflow-hidden object-contain" src={regImage} alt="Registration" />
                    </div>
                    <div className="flex flex-col gap-4 p-10 rounded-r-md bg-[#284B63]">
                        <h1 className="text-3xl font-bold text-center">Signup</h1>
                        <form onSubmit={handleSubmit(registerUser)}>
                            <div className="flex profile flex-col items-center justify-center py-2">
                                <label htmlFor="profile">
                                    <img className="w-24 h-24 rounded-full" src={profile} alt="User Avatar" />
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    name="profile"
                                    id="profile"
                                    {...register("avatar")}
                                    onChange={(e) => handleFileChange(e)}
                                />
                                <h1 className="font-semibold mt-3 text-xl">Upload Photo</h1>
                            </div>
                            <div className="flex flex-col gap-4" >
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    {...register("fullName",
                                        { required: "Please enter your full name." })}
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...register("email",
                                        {
                                            required: "Please Enter your email"
                                        })}
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Please Enter the Password"
                                    })}
                                />
                                <Button
                                    children="Signup"
                                    type="submit"
                                    textColor="text-black"
                                    className="font-semibold"
                                />
                                <p className="text-sm text-gray-300 font-semibold text-center">
                                    Already Registered? <span className="text-red-400">Login now</span>
                                </p>
                                {/* {error && (
                                    <p className="text-center px-4 py-2 text-red-600 rounded-lg mb-4 font-semibold">
                                        {error}
                                    </p>
                                )} */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Signup;
