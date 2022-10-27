import React from 'react';
import {EditorComponent} from "../../components/editor";
import css from "./articles.module.scss"
import MainContainer from "../../components/MainContainer";
import StrapiMenu from "../../components/menus/strapi-menu";

export default function Articles({articles,menus}) {
    console.log("asds")
    return (
        <MainContainer title={"Articles"}>
            <StrapiMenu menus={menus} />
            <h2>Articles</h2>
            {/*<EditorComponent/>*/}
            {
                articles?.data?.map(item =>
                    <div className={css.article} key={item.id}>
                        <h2>{item?.attributes?.title}</h2>
                        <div  dangerouslySetInnerHTML={{__html: item?.attributes?.content}}/>
                    </div>
                )
            }

        </MainContainer>

    )
        ;
};

export async function getStaticProps(context) {
    const res1 = await fetch('http://localhost:1337/api/menus?populate=*');
    const menus = await res1.json();

    const res2 = await fetch('http://localhost:1337/api/articles')
    const articles = await res2.json()


    return {
        props: {articles,menus}, // will be passed to the page component as props
    }
}