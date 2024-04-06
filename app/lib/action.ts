"use server"
import { getStatesByInfor } from "./data"
import { redirect } from "next/navigation";
import { Destiny, Infor } from "./definitions";
export async function getStates(rawData: Infor) {
    //  console.log(rawData);
    const result = (await getStatesByInfor(rawData)).rows[0];
   
    // console.log(result);
    return result;
}

export async function toStamentWithState(formData:FormData) {
    
    const rawData = {
        year: Number(formData.get('year')),
        month: Number(formData.get('month')),
        day: Number(formData.get('day')),
        hour: Number(formData.get('hour')),
     }

    redirect('/statement/?year='+rawData.year+'&month='+rawData.month+'&day='+rawData.day+'&hour='+rawData.hour);
}