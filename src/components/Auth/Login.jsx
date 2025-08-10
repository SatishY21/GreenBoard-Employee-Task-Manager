import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // console.log(handleLogin)


    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email,password)


        // console.log("form submitted")
        // console.log("eamil is",email)
        // console.log("pass is",password)

        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center bg-black">
                <div className="bg-[#0f0] bg-opacity-10 p-8 rounded-xl shadow-lg w-80 border border-green-500">
                    <h2 className="text-2xl font-bold text-center text-green-400 mb-6 tracking-wider">
                        LOGIN
                    </h2>
                    <form
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}

                        className="flex flex-col gap-4">
                        <input 
                        value={email}
                        onChange={(e) => {
                            // console.log(e.target.value)
                            setEmail(e.target.value)
                        }}

                        required
                            type="email"
                            placeholder="Enter your email"
                            className="bg-black text-green-300 placeholder-green-500 border border-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input
                         value={password}
                        onChange={(e) => {
                            // console.log(e.target.value)
                            setPassword(e.target.value)
                        }}
                        
                        required
                            type="password"
                            placeholder="Enter password"
                            className="bg-black text-green-300 placeholder-green-500 border border-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button
                            className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 rounded-md transition duration-300 shadow-md hover:shadow-green-500/50"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>


        </>

    )
}

export default Login