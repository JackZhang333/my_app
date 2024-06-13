"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { getStates } from "../../lib/action";
import { useTranslations } from 'next-intl';


export default function Page({
  params: { locale } }: {
    params: { locale: string }
  }) {

  const t = useTranslations('Statement');
  function convertToChineseMeasure(score: number) {
    const units = ['斤', '两'];
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const somes: number = score % 10;
    const tens: number = Math.floor(score / 10);
    const result = `${digits[tens]}${units[0]}${digits[somes]}${units[1]}`;
    const result_e = `${tens} Jin ${somes} Liang`;
    return locale == 'en' ? result_e : result;
  }

  const [score, setScore] = useState("");
  const [state, setState] = useState("");
  const [state_e, setState_e] = useState("");

  useEffect(() => {
    const url = queryString.parse(window.location.search);
    const { year, month, day, hour } = url;
    getStates({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: Number(hour),
    }).then((data) => {
      // console.log(data)
      setScore(convertToChineseMeasure(data.score));
      setState(data.state);
      setState_e(data.state_e);
    })
  })
  return <main className="flex min-h-screen flex-col items-center  p-24 bg-yellow-300">
    <div className="text-4xl">

      {score}
    </div>
    <p className="text-[24px] mt-6 text-gray-900 leading-9">
      {locale == 'en' ? t('state', { state: state_e }) : t('state', { state: state })}
    </p>
    <p className="text-gray-600 opacity-80 fixed bottom-20 left-6">{t('hint')}</p>
    <Link href="/" className=" fixed flex px-6 py-2 bg-orange-500 top-10 rounded-[4px] text-white left-6">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 pr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>

      {t('back')}</Link>
  </main>
}
