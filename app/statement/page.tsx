"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import queryString from "query-string";
import { getStates } from "../lib/action";
export default function Page(){
  function convertToChineseMeasure(score:number) {
    const units = ['斤', '两'];
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const somes:number = score % 10;
    const tens:number = Math.floor(score / 10);
    const result = `${digits[tens]}${units[0]}${digits[somes]}${units[1]}`;
    return result
  }
  
  const [score, setScore] = useState("");
  const [state, setState] = useState("");
  useEffect(() => {
    const url = queryString.parse(window.location.search);
    const {year, month, day, hour} = url;
    getStates({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: Number(hour),
    }).then((data) => {
      // console.log(data)
      setScore(convertToChineseMeasure(data.score));
      setState(data.state);
    })
  })
    return <main className="flex min-h-screen flex-col items-center  p-24 bg-yellow-300">
    <div className="text-4xl">
      {score}
    </div>
    <p className="text-2xl mt-6 text-gray-900">
      {state}
    </p>
    <p className="text-white opacity-80 fixed bottom-20 left-6">Hint: Jin and Liang are traditional weight units in China.</p>
    <Link href="/" className="text-orange-500 opacity-80 fixed top-10 left-6">Back</Link>
  </main>
}