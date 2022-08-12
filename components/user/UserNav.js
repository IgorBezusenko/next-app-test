import React from 'react';
import css from "../../pages/users/user.module.scss";
import A from "../A";
import {useRouter} from "next/router";

const UserNav = ({slug}) => {
    const {query} = useRouter()
    return (
        <>
            <h1>User with id: {query ? query.id : "User is not found"}</h1>
            <ul className={css.user__nav}>
                <li>
                    <A href={`/users/${slug}`}>User</A>
                </li>
                <li>
                    <A href={`/users/${slug}/user-posts`}>User posts</A>
                </li>
                <li>
                    <A href={`/users/${slug}/user-todos`}>User todos</A>
                </li>
                <li>
                    <A href={`/users/${slug}/user-albums`}>User albums</A>
                </li>
            </ul>
        </>

    );
};

export default UserNav;