import Link from "next/link";
import A from "./A";
import Image from "next/image";
import foto from "./1.jpeg"
function Nav(props) {
    return (
        <div className={"navbar"}>
            <A href={"/"} >Main page<Image src={foto} width={50} height={50}/>
            </A>
            <A href={"/users"}>Users page</A>
            <style jsx>
                {`
                  .navbar {
                    background-color: bisque;
                    color: white;
                    padding: 20px;
                  }
                `
                }
            </style>
        </div>
    );
}

export default Nav;