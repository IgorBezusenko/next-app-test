import MainContainer from "../../../components/MainContainer";
import UserNav from "../../../components/user/UserNav";
import UserProfile from "../../../components/user/UsereProfile";

import css from "../user.module.scss"

export default function User({user, slug}) {

    // console.log("user", {user, slug})
    return (
        <MainContainer title={"User"}>
            <div className={css.user}>

                <UserNav slug={slug}/>
                <UserProfile id={user.id}
                             name={user.name}
                             username={user.username}
                             email={user.email}
                             address={user.address}
                             phone={user.phone}
                             website={user.website}
                             company={user.company}/>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return {
        props: {user, slug: params.id}, // will be passed to the page component as props
    }
}