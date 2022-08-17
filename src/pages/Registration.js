import { Grid,TextField,Button, Alert } from '@mui/material'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification ,updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const Registration = () => {
    let navigate = useNavigate()
    const db = getDatabase();
    const auth = getAuth();
    let [name,setName]= useState('')
    let [email,setEmail]= useState('')
    let [password,setPassword]= useState('')
    let [confirmpassword,setConfirmPassword]= useState('')

    let [nameerr,setNameerr] = useState('')
    let [emailerr,setEmailerr] = useState('')
    let [passworderr,setPassworderr] = useState('')
    let [confirmpassworderr,setConfirmpassworderr] = useState('')
    let [passwordlengtherr,setPasswordlengtherr] = useState('')
    let [confirmpasswordlengtherr,setConfirmpasswordlengtherr] = useState('')
    let [emailregerr,setEmailregerr] = useState('')
    let [matchpassword,setMatchpassword] = useState('')

    let handleSubmit=()=>{
        if(!name){
            setNameerr("please enter your name")
        }else if(!email){
            setNameerr("")
            setEmailerr("please enter email")
        }else if(!password){
            setEmailerr("")
            setPassworderr("please enter password")
        }else if(!confirmpassword){
            setPassworderr("")
            setConfirmpassworderr("please enter your confirm password")
        }else if(password.length <8){
            setPassworderr("")
            setConfirmpassworderr("")
            setPasswordlengtherr("password should be greater than 8")
        }else if (confirmpassword.length<8){
            setPasswordlengtherr("")
            setConfirmpasswordlengtherr("password should be greater than 8")
        }else if(password !== confirmpassword){
                setConfirmpasswordlengtherr("")
                setMatchpassword("password not matched")
            }else{
                setConfirmpasswordlengtherr("")
                setMatchpassword("")
                createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("Email verification sent!")

    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      console.log("nameset")
      set(ref(db, 'users/'+auth.currentUser.uid), {
        username: name,
        email: email,
      });
    }).catch((error) => {
      console.log(error)
    });

  });
    navigate("/login")

  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes("email")){
        setEmailregerr("email already registered")
    }

  });                
        }

        
    }


  return (
    <section className='registration-part'>
    <Grid container spacing={2}>
  <Grid item xs={6}>
    <div className='box'>
    <div className='left'>
    <h2>Get started with easily register</h2>
    <p>Free register and you can enjoy it</p>
    {emailregerr ? 
    <Alert style={{marginTop:"10px",width:"325px"}} variant="outlined" severity="error">
    email already registered
</Alert>
:
""
    
}
    <TextField
        helperText={nameerr}
        id="demo-helper-text-misaligned"
        label="Full Name"
        type="text"
        onChange={(e)=>{setName(e.target.value)}}
     style={{width:"355px",marginTop:"40px"}} />
     <br/>
    <TextField
        helperText={emailerr}
        id="demo-helper-text-misaligned"
        label="E-mail"
        type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
     style={{width:"355px",marginTop:"40px"}} />
     <br/>
    <TextField
        helperText={passworderr ? passworderr : passwordlengtherr ? passwordlengtherr : ""}
        id="demo-helper-text-misaligned"
        label="Password"
        type="password"
        onChange={(e)=>{setPassword(e.target.value)}}
     style={{width:"355px",marginTop:"40px"}} />
     <br/>
    <TextField
        helperText={confirmpassworderr ? confirmpassworderr : confirmpasswordlengtherr ? confirmpasswordlengtherr : matchpassword ? matchpassword : ""}
        id="demo-helper-text-misaligned"
        label="Confirm password"
        type="password"
        onChange={(e)=>{setConfirmPassword(e.target.value)}}
     style={{width:"355px",marginTop:"40px"}} />

     <br/>

<Button onClick={handleSubmit} style={{width:"355px",marginTop:"40px",borderRadius:"20px",background:"#5F35F5"}} variant="contained">Sign Up</Button>
<p className='message'>Already have an accoun? <Link to="/login">Log in</Link></p>

    </div>
    </div>
  </Grid>
  <Grid item xs={6}>
    <img style={{width:"100%",height:"100vh"}} src='./assets/images/rgbackground.gif' alt='4'/>
  </Grid>
</Grid>
    </section>
  )
}

export default Registration