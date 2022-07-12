import React from 'react';
import A from "./A";
import Head from "next/head";
import Nav from "./Nav";

function MainContainer({title, keywords, children}) {
    let isKeywords = keywords?keywords:""
    return (
        <>
            <Head>
                <meta keywords={"next js, SSH " + isKeywords}></meta>
                <title>{title}</title>
            </Head>

            <Nav/>
            <div>
                {children}
            </div>


        </>
    );
}

export default MainContainer;