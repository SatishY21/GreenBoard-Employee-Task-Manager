import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

    // const [username, setUsername] = useState("")

    // if(!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.first_name)
    // }

    // console.log(data)

    const logOutUser = () =>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // console.log(props.changeUser)
        // window.location.reload()
    }



    return (
        <div className=" w-screen bg-black text-green-400 font-mono">
            <div className="flex items-center justify-between px-6 py-4 border-b border-green-500">
                <div className="text-xl">
                    Hello, <span className="font-bold text-green-300">username</span>
                </div>
                <button onClick={logOutUser} className="border border-green-400 px-4 py-1 rounded hover:bg-green-500 hover:text-black transition">
                    Log out
                </button>
            </div>
        </div>

    )
}

export default Header