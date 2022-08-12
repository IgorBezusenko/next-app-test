import MainContainer from "../../components/MainContainer";
import {UserAlbum} from "../../components/user/UserAlbum";

const Albums = ({albums}) => {
    return (<MainContainer title={"Albums"}>
        <h2> Albums </h2>
        {
            albums?.map(item => <UserAlbum key={item.id} id={item.id} title={item.title}/>)
        }

    </MainContainer>);
};

export default Albums;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await res.json()
    return {
        props: {albums}, // will be passed to the page component as props
    }
}