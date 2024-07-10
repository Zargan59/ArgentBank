import Navbar from "../Components/NavBar"
import Banner from "../Components/Banner"
import Features from "../Components/Feature/Features"
import Footer from "../Components/Footer"
import {GetUserInfo,GetUserAPIInfo,GetAPIInfo} from "../API/dataApi"
import {useEffect, useState} from "react"


export default function HomePage (){
    return(
        <div>
            <Navbar />
            <Banner />
            <Features />
            <Footer />
        </div>
    )
}