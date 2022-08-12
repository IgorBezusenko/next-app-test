import MainContainer from "../../components/MainContainer";
import {TodosCart} from "../../components/user/TodosCart";

import css from "./todos.module.scss"

function Index({posts}) {
    return (
        <MainContainer title={"Todos"}>
            <h1>Todos</h1>
            <div className={css.todos__container}>
                {posts.map(item => (
                    <TodosCart key={item.id} title={item.title} completed={item.completed} id={item.id}/>
                ))
                }
            </div>
        </MainContainer>

    );
}

export default Index;




export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {posts}, // will be passed to the page component as props
    }
}