import { useState } from "react"
import {useUser} from "../Context/UserContext"

function Profile() {
    const {user, setUser} = useUser();

    const [loading, setLoading] = useState(false)

    const handleLogin = () =>{
        setLoading(true);
        setTimeout(()=>{
            setUser({id:1, username:'bsivri', bio: 'Lorem ipsum dolor.'});
            setLoading(false);
        },1500);

      
    } 
    const handleLogout = () => {
        setUser(null)
    };
         
  return (
    <div>
        Profile <hr />
        {
            !user && (<button onClick={handleLogin}>{loading ? 'loading...' : 'login'}</button>)
        }
        
        <br />

        {
            user && (<button onClick={handleLogout}>Logout</button>)
        }
        <code>{JSON.stringify(user)}</code>
    </div>
  )
}

export default Profile