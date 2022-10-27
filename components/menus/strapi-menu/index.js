import React, {useState} from 'react';

import {MenuItems} from "../menu-items";
import css from "../menu.module.scss"
import Image from "next/image";
import chevron from "../../chevron.png"

function StrapiMenu({menus}) {
    const [menuActive, setMenuActive] = useState(null);
    const menuOpen = (id) => {
        if (id === menuActive) {
            setMenuActive(null)
        } else {
            setMenuActive(id)
        }
    };

    const menuClose =()=>{
        setMenuActive(null)
    }
    return (
        <div className={css.menus}>
            <ul className={css.menus__content}  >
                {
                    menus?.data?.map((menu) => {
                        return (
                            <li key={menu.id} className={css.menus__item} >
                                <h2  className={css.menus__title} onClick={() => menuOpen(menu.id)}>
                                    {menu.attributes.title}
                                    <Image src={chevron}  width={25}  height={25}/>
                                </h2>
                                {menuActive === menu.id && <MenuItems menuItems={menu.attributes.items.data} menuClose={menuClose} />}
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default StrapiMenu;

