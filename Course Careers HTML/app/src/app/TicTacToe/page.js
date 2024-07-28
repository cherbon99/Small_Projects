"use client";
import { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
    function onSquareClick(){

    }
    return (
        <>
          <div className="board-row">
            <square value={"X"} onClick={()=> onSquareClick()}/>
            <square value={"X"} onClick={()=> onSquareClick()}/>
            <square value={"X"} onClick={()=> onSquareClick()}/>
          </div>
          <div className="board-row">
            <square value={"X"} onClick={()=> onSquareClick()}/>
            <square value={"X"} onClick={()=> onSquareClick()}/>
            <square value={"X"} onClick={()=> onSquareClick()}/>
          </div>
          <div className="board-row">
            <square value={"X"} onClick={()=> onSquareClick()}/>
            <square value={"X"} onClick={()=> onSquareClick()}/>
            <square value={"X"} onClick={()=> onSquareClick()}/>
          </div>
        </>
      );
}

export default function Game() {
  return (
    <>
      <div>
        <Board/>
      </div>
    </>
  );
}
