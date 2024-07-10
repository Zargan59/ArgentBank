import Navbar from "../Components/NavBar"
import Footer from "../Components/Footer"
import UserInfo from "../Components/UserInfo"
import store from "../Redux/store/store"

export default function User(){
    // const test = store.getState().token
    // console.log(test);
    return(
        <main className="userSection">
            <Navbar origin = "profile" />
            <UserInfo />
            <Footer />
        </main>
    )
}