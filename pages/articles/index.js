import React from 'react';
import {EditorComponent} from "../../components/editor";
// import "@progress/kendo-theme-default/dist/all.css";
import css from "./articles.module.scss"
import MainContainer from "../../components/MainContainer";
export default function Articles({articles}) {
    const data = articles?.data?.attributes?.content
    console.log("Articles",articles,data)
    return (
        <MainContainer title={"Articles"}>
            <h1>Articles</h1>
            {/*<EditorComponent/>*/}
            {
                articles?.data.map(item =>
                    <div className={css.article} key={item.id}>
                        <h2>{item?.attributes?.title}</h2>
                        <div  dangerouslySetInnerHTML={{__html: item?.attributes?.content}}/>
                    </div>
                )}

        </MainContainer>

    )
        ;
};

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:1337/api/artticles')
    const articles = await res.json()
    return {
        props: {articles}, // will be passed to the page component as props
    }
}