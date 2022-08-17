import React, { useEffect, useState } from 'react'
import {AiFillHome,AiOutlineSetting} from 'react-icons/ai'
import {MdSms} from 'react-icons/md'
import {IoMdNotificationsOutline,IoMdLogOut} from 'react-icons/io'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { Link , useNavigate} from 'react-router-dom';


const Leftbar = (props) => {


    const auth = getAuth();
    const navigate = useNavigate()
    const [name,setName] = useState("")
    
    let handleSignout=()=>{
        signOut(auth).then(() => {
            console.log("signout")
            navigate("/login")
          }).catch((error) => {
            console.log(error)
          });
        }
          useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setName(user.displayName)    
                }
              });
        },[])
    

  return (
    <div className='leftbar'>
        <img className='profilepic' src='./assets/images/rgbackground.gif' alt='1'/>
        <h4 className='username'>{name}</h4>
        <div className='icons'>
            <ul>
                <li className={props.active == 'home' && 'active'}>
        <AiFillHome className='icons'/>
                </li>
                <li className={props.active == 'msg' && 'active'}>
        <MdSms className='icons'/></li>
                <li className={props.active == 'notification' && 'active'}>
        <IoMdNotificationsOutline className='icons'/></li>
                <li className={props.active == 'setting' && 'active'}>
        <AiOutlineSetting className='icons'/></li>
                <li>
        <IoMdLogOut onClick={handleSignout} className='icons'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Leftbar