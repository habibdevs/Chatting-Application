import React,{useEffect,useState} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Alert,Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Leftbar from '../components/Leftbar';
import Search from '../components/Search';
import GroupList from '../components/GroupList';
import FriendRequest from '../components/FriendRequest';
import Friends from '../components/Friends';
import UserList from '../components/UserList';



const Home = () => {

    const auth = getAuth();
    const navigate = useNavigate()
    const [emailverify,setEmailverify] = useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
            setEmailverify(user.emailVerified)

            } else {
                navigate("/login")
            }
          });
    })


  return (
    <>
    
    {emailverify ?
        <Grid container spacing={2}>
        <Grid item xs={2}>
          <Leftbar active="home"/>
        </Grid>
        <Grid item xs={4}>
          <Search/>
          <GroupList/>
          <FriendRequest/>
        </Grid>
        <Grid item xs={3}>
          <Friends/>
        </Grid>
        <Grid item xs={3}>
          <UserList/>
        </Grid>
      </Grid>
        :
        <Alert variant="outlined" severity="warning">
  please check your email for verification
</Alert>
        }
    </>
  )
}

export default Home