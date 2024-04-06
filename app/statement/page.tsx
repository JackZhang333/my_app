import Link from "next/link";

export default function Page(){
    return <main className="flex min-h-screen flex-col items-center  p-24 bg-yellow-300">
    <div className="text-4xl">
      Four jin and two liang
    </div>
    <p className="text-2xl mt-6 text-gray-900">
    In the early years, it was difficult to plan due to unfortunate circumstances. Gradually, wealth flowed in like water. By middle age, both clothing and food prospered, and at that time, fame and fortune came together.
    </p>
    <p className="text-white opacity-80 fixed bottom-20 left-6">Hint: Jin and Liang are traditional weight units in China.</p>
    <Link href="/" className="text-orange-500 opacity-80 fixed top-10 left-6">Back</Link>
  </main>
}