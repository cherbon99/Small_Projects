"use client";
import { Post } from "@/components/Post";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  function onCount(){
    setCount(count +1);
  }


  return (
    <>
      <p>{count}</p>
      <button onClick={onCount}>Count Up!</button>
    </>
  );
}
