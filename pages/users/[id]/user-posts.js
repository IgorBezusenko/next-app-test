import {useRouter} from "next/router";
import {PostCart} from "../../../components/user/PostCart";
import MainContainer from "../../../components/MainContainer";
import UserNav from "../../../components/user/UserNav";

const UserPosts = ({userPosts, slug}) => {
    const {query} = useRouter()
    return (
        <MainContainer>
            <UserNav slug={slug}/>
            {userPosts.map(item => (
                <PostCart key={item.id} title={item.title} body={item.body} id={item.id}/>
            ))}

        </MainContainer>
    );
};

export default UserPosts;

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
    const userPosts = await res.json()
    return {
        props: {userPosts, slug: params.id}, // will be passed to the page component as props
    }
}