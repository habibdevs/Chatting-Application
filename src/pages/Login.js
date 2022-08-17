import { Grid,TextField,Button, Alert } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai';
import { Link , useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider , } from "firebase/auth";


const Login = () => {


    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const auth = getAuth();
    let [email,setEmail]= useState('')
    let [password,setPassword]= useState('')

    let [emailerr,setEmailerr] = useState('')
    let [passworderr,setPassworderr] = useState('')
    let [passwordlengtherr,setPasswordlengtherr] = useState('')
    let [checkpassword,setCheckpassword] =useState(false)
    let [passwordwrong,setPasswordwrong] =useState('')
    let [emailnotfound,setEmailnotfound] =useState('')

    let handleSubmit=()=>{
        if(!email){
            setEmailerr("please enter email")            
        }else if(!password){
            setEmailerr("")
            setPassworderr("please enter password")
        }else if(password.length <8){
            setPasswordlengtherr("password should be greater than 8")
            }else{
                signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
      console.log(user)
      navigate("/homepage")

  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes('wrong-password')){
        setPasswordwrong("Wrong Password")
    }else if(errorCode.includes('user-not-found')){
        setEmailnotfound("email not found")
    }
  });                
        }

        
    }

    let handleEye=()=>{
        setCheckpassword(!checkpassword)
    }

    let handleGoogleSignin=()=>{
        signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    navigate('/homepage')

  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);

  });
    }

    let handleFacebookLogin =()=>{
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    navigate('/homepage')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(errorCode)

  });
    }

  return (
    <section className='registration-part login-part'>
    <Grid container spacing={2}>
  <Grid item xs={6}>
    <div className='box'>
    <div className='left'>
    <h2>Log in to your account!</h2>
     <br/>
     <div className='loginoption'>
    <div onClick={handleGoogleSignin} className='option'><img src='./assets/images/googlelogo.png' alt='2'/>Login with Google</div>
    <div onClick={handleFacebookLogin} className='option'><img src='./assets/images/fblogo.png' alt='1'/>Login with Facebook</div>
     </div>
    {passwordwrong ? 
    <Alert style={{marginTop:"10px",width:"325px"}} variant="outlined" severity="error">
    Wrong Password
</Alert>
        :
        emailnotfound ?
        <Alert style={{marginTop:"10px",width:"325px"}} variant="outlined" severity="error">
    email not found
</Alert>
:
        ""
}
    <TextField
        helperText={emailerr}
        id="demo-helper-text-misaligned"
        label="E-mail"
        type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
     style={{width:"355px",marginTop:"40px"}} />
     <br/>
    <div className='eye'>
    <TextField
        helperText={passworderr ? passworderr : passwordlengtherr ? passwordlengtherr : ""}
        id="demo-helper-text-misaligned"
        label="Password"
        type={checkpassword ? "text" : "password"}
        onChange={(e)=>{setPassword(e.target.value)}}
     style={{width:"355px",marginTop:"40px"}} />
     {checkpassword ? 
     <AiOutlineEye className='eyeicon' onClick={handleEye}/>
    :
    <AiOutlineEyeInvisible className='eyeicon' onClick={handleEye}/>

    }
    </div>
     <br/>

<Button onClick={handleSubmit} style={{width:"368px",marginTop:"40px",borderRadius:"9px",background:"#5F35F5",padding:"25px 0"}} variant="contained">Log in to continue</Button>
<p className='message'>Don't have an accoun? <Link to="/register">Sign up</Link></p>

    </div>
    </div>
  </Grid>
  <Grid item xs={6}>
    <img style={{width:"100%",height:"100vh"}} src='./assets/images/rgbackground.gif' alt='3'/>
  </Grid>
</Grid>
    </section>
  )
}

export default Login