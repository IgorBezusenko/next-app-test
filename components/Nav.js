import Link from "next/link";
import A from "./A";
import Image from "next/image";
import foto from "./1.jpeg"
function Nav(props) {
    return (
        <div className={"navbar"}>

            <A href={"/"} > <Image src={foto} width={25} height={25}/>  Main page
            </A>
            <A href={"/users"}>Users</A>
            <A href={"/posts"}>Posts</A>
            <A href={"/todos"}>Todos</A>
            <A href={"/albums"}>Albums</A>
            <A href={"/lof"}>Error page</A>
            <style jsx>
                {`
                  .navbar {
                    background-color: #4a3f32;
                    color: white;
                    padding: 20px;
                    margin-bottom: 20px;
                  }
                `
                }
            </style>
        </div>
    );
}

export default Nav;