import React from 'react';
import MainContainer from "../../components/MainContainer";

import css from "./posts.module.scss"
import {PostCart} from "../../components/user/PostCart";

function Index({posts}) {
    return (
        <MainContainer title={"Posts"}>
            <h1>Posts</h1>
            <div className={css.post__container}>
                {posts.map(item => (
                    <PostCart key={item.id} title={item.title} body={item.body} id={item.id}/>
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