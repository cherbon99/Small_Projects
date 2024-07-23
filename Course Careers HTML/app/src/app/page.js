import { Post } from "@/components/Post";

export default function Home() {
  const post = [
    {
      title: "Speed Tour",
      author: "Chris",
      content: "THIS IS A GARAGE",
      following: false,
    },
    {
      title: "Speed Tour",
      author: "Chris",
      content: "MOST HOUSES HAVE THESES",
      following: false,
    },
  ];

  return (
    <>
      {post.map((content, idx) => {
        return <Post {...content} key={idx + Math.random()} />;
      })}
    </>
  );
}
