import NavBar from "./navBar";

export default function Layout({children}){
    return (
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}