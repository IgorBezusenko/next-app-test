import MainContainer from "../../../components/MainContainer";
import UserNav from "../../../components/user/UserNav";
import UserProfile from "../../../components/user/UsereProfile";

// import css from "../user.module.scss"

export default function StrapiArticles({ slug}) {

    // console.log("user", { slug})
    return (
        <MainContainer title={"StrapiArticles"}>
            <div className={""}>
                <h2>article</h2>
                {/*<UserNav slug={slug}/>*/}
                {/*<UserProfile id={article.id}*/}
                {/*             name={article.name}*/}
                {/*             username={article.content}*/}
                {/*/>*/}
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    // const res = await fetch(`http://localhost:1337/api/article`)
    // const article = await res.json()
    return {
        props: {
             slug: params.id
        }, // will be passed to the page component as props
    }
}