import Nav from "../components/Nav";
import {useEffect, useState} from "react";
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return (
        <MainContainer title={"Users"}>
            <h1>Users page</h1>
            <ul>
                {
                    users.map(item => {
                        return (
                            <li key={item.id}>
                                <A href={"/users/" + item.id} >{item.name}</A>
                            </li>
                        )
                    })
                }
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}