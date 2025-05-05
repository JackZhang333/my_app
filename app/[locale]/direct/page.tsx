"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { getStatesByScore } from "@/app/lib/data"; 
import { useTranslations } from 'next-intl';
import { TypingAnimation } from "@/src/components/magicui/typing-animation";
import { Button } from "@/components/ui/button"
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
  const [state_f, setState_f] = useState("");
  const [state_f_e, setState_f_e] = useState("");
  const [gender, setGender] = useState("male");
  const [originalScore, setOriginalScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donateAmount, setDonateAmount] = useState('wepay5.png');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const autoShowDonateWindow = () => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  };

  useEffect(() => {
    const url = queryString.parse(window.location.search);
    const { score, gender } = url;
    setGender(gender as string);
    if (score) {
      getStatesByScore(Number(score)).then((data) => {
      setScore(convertToChineseMeasure(data.score));
      setState(data.state);
      setState_e(data.state_e);
      setOriginalScore(data.score);
      setState_f(data.female);
      setState_f_e(data.state_e_f);
      //检查是否已经显示过打赏窗口
      const hasShownDonate = sessionStorage.getItem('hasShownDonate');
      if (data.score > 40 && !hasShownDonate) {
        // 选择打赏金额
        const donateAmounts = ['wepay5.png', 'wepay10.png', 'wepay50.png',];
        //当 score 大于 35 时设置 wepay10.png;当 score 大于 50 时设置 wepay50.png
        if (data.score > 60) {
          setDonateAmount(donateAmounts[2]);
        } else if (data.score > 50) {
          setDonateAmount(donateAmounts[1]);
        } else {
          setDonateAmount(donateAmounts[0]);
        }
        autoShowDonateWindow();
      }
    })
  }}, []); // Added dependency array to prevent infinite loop
  return (
    <main className="flex min-h-screen flex-col items-center px-6 md:px-12 py-24 w-full ">
      <div className="w-full h-60 -z-10 top-0 absolute bg-gradient-to-b from-white via-white/60 to-white/0" />

      <div className="fixed z-10 top-0 left-0 right-0 flex items-center justify-center h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <Link href="/" className="absolute left-4 px-2 py-1 bg-orange-500 rounded-[4px] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <div className="text-black text-xl font-medium">{score}</div>
        <button
          onClick={openModal}
          className="absolute right-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded"
        >
          <i className="fa-solid fa-money-bill-wave"></i> {t('donate')}
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed z-40 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer p-2"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">{t('donate')}</h2>
            <p className="mb-4 text-gray-500">{t('donateTip')}</p>
            <img
              src={`/${donateAmount}`}
              alt="打赏二维码"
              className="mx-auto"
            />
            <Button

              className="w-full mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                closeModal();
                sessionStorage.setItem('hasShownDonate', 'true');
              }}
            >
              {t('close')}
            </Button>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-zinc-800 md:text-xl lg:text-3xl font-['hengsan']">
            <TypingAnimation>
              {gender === 'male'
                ? (locale == 'en' ? t('state', { state: state_e }) : t('state', { state: state }))
                : (locale == 'en' ? t('state', { state: state_f_e }) : t('state', { state: state_f }))}
            </TypingAnimation>
          </div>
          
        </div>
        {originalScore <40 && <div className="fixed bottom-20 -left-10 rotate-45 transform-gpu bg-orange-600 py-2 px-8 shadow-lg opacity-80">
            <p className="text-white text-lg whitespace-nowrap">{t('note')}</p>
          </div>}
        {/* Desktop card with image */}
        <div className="hidden md:block mt-8 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={`https://ctujbowupykhwhytcfbw.supabase.co/storage/v1/object/public/${gender === 'male' ? 'destiny.pic' : 'destiny.female'}/${originalScore}.webp`}
            alt="destiny"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </div>




      {/* Mobile background image */}
      <div
        className="fixed inset-0 -z-20 md:hidden bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(https://ctujbowupykhwhytcfbw.supabase.co/storage/v1/object/public/${gender === 'male' ? 'destiny.pic' : 'destiny.female'}/${originalScore}.webp)`
        }}
      >

      </div>



    </main>
  )
}
// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 w-full ">
//       <div className="w-full h-60 -z-10 top-0 absolute bg-gradient-to-b from-white via-white/60 to-white/0" />
//       <div className="w-full max-w-2xl mx-auto mt-8">
//         <div className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
//           <div className="text-zinc-800 md:text-xl lg:text-3xl font-['hengsan']">
//             <p>Hello,world</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }