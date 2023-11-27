import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import IncomeExpenses from '../components/IncomeExpenses';
import PostTransaction from "../components/PostTransaction";
import GetTransactions from './../components/GetTransactions';

function HomePage() {
  const [name, setName] = useState("User")
  const [profile, setProfile] = useState(null)
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(authState.userData.fullName)
    setName(authState.userData.fullName)
    setProfile(authState.userData.avatar)
  }, [])

  return (
    <>
      <div className="w-full h-screen">
        <div className="flex md:flex-row gap-5 md:gap-1 flex-col-reverse justify-between items-center p-10 mt-20 mx-5 md:mx-10 text-white bg-[#1D3557] rounded-lg">
          <div>
            <h1 className="text-4xl mb-2 md:text-left text-center">
              Welcome <span className="font-semibold">{name}</span>{" "}
            </h1>
            <p className="text-gray-300">
              CashHub the Expense and Income Management System
            </p>
          </div>
          <div>
            <img className="w-[150px] h-[150px] rounded-full" src={profile} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-0 md:gap-4">
          <IncomeExpenses
            name="Income"
          />
          <IncomeExpenses
            name="Expense"
          />
        </div>
        {/* <PostTransaction /> */}
        <GetTransactions />
      </div>
    </>
  );
}

export default HomePage;
