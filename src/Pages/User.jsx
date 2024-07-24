import Navbar from "../Components/NavBar"
import Footer from "../Components/Footer"
import UserInfo from "../Components/UserInfo"
import store from "../Redux/store/store"

import { login } from "../Redux/actions/action";
export default function User(){
    //Si le token du SS est reconnu 
    const token = JSON.parse(sessionStorage.getItem("token"))
    if(token){   
            store.dispatch(login(token))
        }
                return(
                    <main className="userSection">
                        <Navbar origin = "profile" firstName={store.getState().firstName} />
                        <UserInfo token={token} />
                        <Footer />
                    </main>
                )
   

}