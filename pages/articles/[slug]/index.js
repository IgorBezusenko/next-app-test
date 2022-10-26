import MainContainer from "../../../components/MainContainer";
import UserNav from "../../../components/user/UserNav";
import UserProfile from "../../../components/user/UsereProfile";
import React from "react";

// import css from "../user.module.scss"

export default function StrapiArticles({article}) {

    // console.log("article", {article})
    return (
        <MainContainer title={"StrapiArticles"}>
            <div className={""}>
                <h2>{article?.attributes?.title}</h2>
                <div  dangerouslySetInnerHTML={{__html: article?.attributes?.content}}/>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}`)
    const articles = await res.json()
    return {
        props: {
            // params
            article:articles.data[0]
        }, // will be passed to the page component as props
    }
}