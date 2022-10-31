import * as React from 'react';

import {Menu, MenuItem} from '@progress/kendo-react-layout';
import {useRouter} from "next/router";
import css from "../menu.module.scss"
import Image from "next/image";
import chevron from "../../chevron.png";
import {MenuItems} from "../menu-items";

export const KendoMenu = (props) => {
    const router = useRouter()
    console.log({props})
    const onSelect = event => {

        router.push(event.item.data.route);
    };
    return <div className={css.menus}>
        <Menu onSelect={onSelect}>


            {
                props?.menus?.data?.map((menu) => {

                    return (


                        <MenuItem key={menu.id} text={menu.attributes.title}>
                            {
                                menu.attributes.items.data.map(
                                    item => {
                                        return <MenuItem text={item.attributes.title} data={{
                                            route: '/articles' + item.attributes.url
                                        }}/>
                                    }
                                )

                            }

                        </MenuItem>

                    )
                })
            }
        </Menu>

        {/*<Menu onSelect={onSelect}>*/}
        {/*    <MenuItem text="Home" data={{*/}
        {/*        route: '/'*/}
        {/*    }}/>*/}
        {/*    <MenuItem text="Products" data={{*/}
        {/*        route: '/products'*/}
        {/*    }}/>*/}
        {/*    <MenuItem text="About" data={{*/}
        {/*        route: '/about'*/}
        {/*    }}>*/}
        {/*        <MenuItem text="Team" data={{*/}
        {/*            route: '/about/team'*/}
        {/*        }}/>*/}
        {/*    </MenuItem>*/}
        {/*</Menu>*/}

    </div>;
};
