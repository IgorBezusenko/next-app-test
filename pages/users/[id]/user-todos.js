import {useRouter} from "next/router";
import {PostCart} from "../../../components/user/PostCart";
import MainContainer from "../../../components/MainContainer";
import UserNav from "../../../components/user/UserNav";
import {TodosCart} from "../../../components/user/TodosCart";

const UserTodos = ({userTodos, slug}) => {
    return (
        <MainContainer>
            <UserNav slug={slug}/>
            {userTodos.map(item => (
                <TodosCart key={item.id} title={item.title} completed={item.completed}  id={item.id}/>
            ))}

        </MainContainer>
    );
};

export default UserTodos;

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/todos`)
    const userTodos = await res.json()
    return {
        props: {userTodos, slug: params.id}, // will be passed to the page component as props
    }
}