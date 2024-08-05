import Navbar from "../Components/NavBar"
import Footer from "../Components/Footer"
import UserInfo from "../Components/UserInfo"
import store from "../Redux/store/store"

import { login } from "../Redux/actions/action";
export default function User(){

    const token = JSON.parse(sessionStorage.getItem("token"))


    if(token){  
        store.dispatch(login(token))
                return(
                    <main className="userSection">
                        <Navbar origin = "profile"   />
                        <UserInfo token={token}  />
                        <Footer />
                    </main>
                )
            }
   else{
    return(
        <main>
            <h2>ERROR</h2>
        </main>
    )
   }

}