export function Post({ title, author, content, following }) {
  const button = !following ? (
    <button>Follow</button>
  ) : (
    <button>Unfollow</button>
  );

  return (
    <div>
      <h1>{title}</h1>
      <h3> By: {author}</h3>
      <p>{content}</p>
    </div>
  );
}
