import css from "../../pages/posts/posts.module.scss";

export const UserAlbum = ({title,  id}) => {
    return (
        <div className={css.post}>
            <h2>Album  ID {id}</h2>
            <h3>{title}</h3>
        </div>
    );
}
