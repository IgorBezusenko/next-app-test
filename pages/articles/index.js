import React from 'react';
import {EditorComponent} from "../../components/editor";
import "@progress/kendo-theme-default/dist/all.css";
import {Button} from "@progress/kendo-react-buttons"

export default function Articles({articles}) {
    const data = articles?.data?.attributes?.content
    // console.log("data",articles,data)
    return (
        <>
            <EditorComponent/>
            {/*{*/}
            {/*    articles?.data.map(item =>*/}
            {/*        <div key={item.id} dangerouslySetInnerHTML={{__html: item?.attributes?.content}}/>*/}
            {/*    )}*/}

        </>

    )
        ;
};

// export async function getStaticProps(context) {
//     const res = await fetch('http://localhost:1337/api/artticles')
//     const articles = await res.json()
//     return {
//         props: {articles}, // will be passed to the page component as props
//     }
// }