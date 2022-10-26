import A from "../A";
import MainContainer from "../MainContainer";
import React from "react";

export const MenuItems = (props)=>{
    return(
        <ul>
            {props?.menuItems?.map((item,index)=>{
                return(
                    <li key={index}>
                        <A href={"articles"+item.attributes.url}>{item.attributes.title}</A>
                    </li>
                )
            })}
        </ul>
    )
}