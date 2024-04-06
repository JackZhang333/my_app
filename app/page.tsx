import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-yellow-300 h-screen">
      <div className="bg-orange-500 h-12 flex justify-center items-center opacity-80">
        <p className="text-white text-xl px-6 ">Feudal superstition, for entertainment purposes only</p>
      </div>
      <div className="flex justify-center mt-8">
        <h2 className="text-2xl font-medium font-mono px-6">Chinese traditional bone divination for fortune-telling</h2>
      </div>
      <form action="/statement" method="post" className="flex flex-col px-12">
        <div className="mt-8 flex flex-col">
          <label htmlFor="year">Born in the Chinese lunar year</label>
          <input
            type="number"
            name="year"
            id="yerar"
            placeholder="Please input Chinese lunar year"
            className="h-12 block w-full rounded-md  py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="month">Born in the Chinese lunar month</label>
          <select
            name="month"
            id="month"
            className="h-12 rounded-md text-gray-500 py-1.5 pl-7 pr-12 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="day">Born in the Chinese lunar day</label>
          <select
            name="day"
            id="day"
            className="h-12 rounded-md text-gray-500 py-1.5 pl-7 pr-12 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="hour">Born in the Chinese lunar hour</label>
          <select
            name="hour"
            id="hour"
            className="h-12 rounded-md text-gray-500 py-1.5 pl-7 pr-12 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
          >
            <option value="1">00:01~00:59</option>
            <option value="2">01:00~01:59</option>
            <option value="2">02:00~02:59</option>
            <option value="3">03:00~03:59</option>
            <option value="3">04:00~04:59</option>
            <option value="4">05:00~05:59</option>
            <option value="4">06:00~06:59</option>
            <option value="5">07:00~07:59</option>
            <option value="5">08:00~08:59</option>
            <option value="6">09:00~09:59</option>
            <option value="6">10:00~10:59</option>
            <option value="7">11:00~11:59</option>
            <option value="7">12:00~12:59</option>
            <option value="8">13:00~13:59</option>
            <option value="8">14:00~14:59</option>
            <option value="9">15:00~15:59</option>
            <option value="9">16:00~16:59</option>
            <option value="10">17:00~17:59</option>
            <option value="10">18:00~18:59</option>
            <option value="11">19:00~19:59</option>
            <option value="11">20:00~20:59</option>
            <option value="12">21:00~21:59</option>
            <option value="12">22:00~22:59</option>
            <option value="1">23:00~23:59</option>
          </select>
        </div>
        <input type="submit" value="Start the Calculation" className="mt-8 bg-orange-500 h-12 text-white text-xl hover:bg-orange-600 hover:cursor-pointer active:bg-orange-700 rounded " />
      </form>
      <p className="px-12 mt-8 text-md text-gray-600">
        Bone divination was created by the Tang Dynasty astrologer Yuan Tiangang. According to the Bone Divination Chart based on the Eight Characters (BaZi), it classifies people's destinies into 51 categories. The corresponding Bone Divination Songs can reveal detailed information about a person's life fortune. It is used for analyzing and interpreting aspects such as marriage, career, wealth, and more.
      </p>
    </main>
  );
}
