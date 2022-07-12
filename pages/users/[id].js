import {useRouter} from "next/router";
import Nav from "../../components/Nav";
import style from "../../style/user.module.scss"
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()
    return (
       <MainContainer title={"User"}>
           <div className={style.user}>

               <h1>User with id: {query ? query.id : "User is not found"}</h1>
               <div>User name: {user.name} </div>
           </div>
       </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}