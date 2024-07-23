export function Post({title, author, content, following }) {

    return (
    <div>
        <h1>{title}</h1>
        <h3> By: {author}</h3>
        <button>{ following ? "Unfollow" : "Follow"}</button>
        <p>{content}</p>
    </div>
    );
}