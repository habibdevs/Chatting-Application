import React, { useEffect } from 'react'
import { getDatabase, ref, onValue} from "firebase/database";

const UserList = () => {
    const db = getDatabase();
    
    useEffect(()=>{
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
          });
    },[])
    
  return (
    <div className='grouplist friendlist userlist'>
        <h2>User List</h2>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h1>Friends Reunion</h1>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
        <div className='box'>
            <div className='img'><img src='assets/images/groupimg.png'/></div>
            <div className='name'>
                <h2>Friends Reunion</h2>
                <h4>Hi Guys, Wassup!</h4>
                </div>
            <div className='button'><button>+</button></div>
        </div>
    </div>
  )
}

export default UserList