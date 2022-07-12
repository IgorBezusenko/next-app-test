import Link from "next/link";
import A from "./A";

function Nav(props) {
    return (
        <div className={"navbar"}>
            <A href={"/"} text={"Main page"}/>
            <A href={"/users"} text={"Users page"}/>
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