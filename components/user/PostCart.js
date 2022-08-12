import css from "../../pages/posts/posts.module.scss";

export const PostCart = ({title, body, id}) => {
    return (
        <div className={css.post}>
            <h2>Post ID {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}
