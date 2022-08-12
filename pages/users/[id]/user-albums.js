import {useRouter} from "next/router";
import {PostCart} from "../../../components/user/PostCart";
import MainContainer from "../../../components/MainContainer";
import UserNav from "../../../components/user/UserNav";
import {TodosCart} from "../../../components/user/TodosCart";
import {UserAlbum} from "../../../components/user/UserAlbum";

const UserAlbums= ({albumsTodos, slug}) => {
    return (
        <MainContainer>
            <UserNav slug={slug}/>
            {albumsTodos.map(item => (
                <UserAlbum key={item.id} title={item.title}   id={item.id}/>
            ))}

        </MainContainer>
    );
};

export default UserAlbums;

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`)
    const albumsTodos = await res.json()
    return {
        props: {albumsTodos, slug: params.id}, // will be passed to the page component as props
    }
}