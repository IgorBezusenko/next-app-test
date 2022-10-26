import React from 'react';
import MainContainer from "../../MainContainer";
import A from "../../A";
import {useRouter} from "next/router";
import {MenuItems} from "../menu-items";

function StrapiMenu({menus}) {

    return (
        <div  style={{"padding":"50px"} } >
            <ul style={{"display":"flex", "gap":"20px", }}>
                {
                    menus?.data?.map((menu)=>{
                        return(
                            <li key={menu.id}>
                            <h2>    {menu.attributes.title}</h2>
                                <MenuItems menuItems={menu.attributes.items.data}/>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default StrapiMenu;

