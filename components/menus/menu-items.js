import A from "../A";
import css from "./menu.module.scss"
export const MenuItems = ({menuItems,menuClose}) => {
    return (
        <>
            <div className={css.menuItems__bg} onClick={menuClose}></div>
            <ul className={css.menuItems}>
                {menuItems?.map((item, index) => {
                    return (
                        <li key={index}>
                            <A href={"articles" + item.attributes.url}>{item.attributes.title}</A>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}