import React from 'react';
import {EditorComponent} from "../../components/editor";
// import "@progress/kendo-theme-default/dist/all.css";
import css from "./articles.module.scss"
export default function Articles({articles}) {
    const data = articles?.data?.attributes?.content
    console.log("Articles",articles,data)
    return (
        <>
            {/*<EditorComponent/>*/}
            {
                articles?.data.map(item =>
                    <div className={css.article} key={item.id} dangerouslySetInnerHTML={{__html: item?.attributes?.content}}/>
                )}

        </>

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