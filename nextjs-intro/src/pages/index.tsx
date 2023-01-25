import NavBar from "@/component/navBar";
import { useState } from "react"
// import  "../styles/globals.css" // NextJs에서는 전역으로 적용되는 이런 css는 App에서만 허용해줌.

export default function Home() {
    // return "Hi";
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <h1>Hello {counter} </h1>
            <button onClick={() => {setCounter((prev)=>prev+1)}}>+</button>
            <NavBar/>
        </div>
    )
}