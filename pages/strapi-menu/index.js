import React from 'react';
import MainContainer from "../../components/MainContainer";
import A from "../../components/A";
import {useRouter} from "next/router";

function StrapiMenu({menus, filteredItems}) {
    const router = useRouter()
    console.log(menus)
    console.log(router)
    console.log('filteredItems', filteredItems)
    return (
        <MainContainer title={"StrapiMenu"}>
            <h1>StrapiMenu</h1>
            <ul>
                {filteredItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <A href={"articles/"+item.url}>{item.title}</A>
                        </li>
                    )
                })}
            </ul>
        </MainContainer>
    );
}

export default StrapiMenu;

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:1337/api/menus?populate=*')
    const menus = await res.json();
    const menuItems = menus?.data[1]?.attributes?.items?.data;
    const filteredItems = menuItems.map(el => el.attributes)
    // console.log('menuItems', menuItems)
    // const menusItems =  menus?.attributes?.items
    // const menusItems =  menus?.data?.attributes
    return {
        props: {menus, filteredItems}, // will be passed to the page component as props
    }
}