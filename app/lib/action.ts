"use server"
import { getStatesByInfor } from "./data" 
import { redirect } from "../navigation";
import { Infor } from "./definitions";
import exp from "constants";
export async function getStates(rawData: Infor) {
    //  console.log(rawData);
    const result = await getStatesByInfor(rawData);
   
    // console.log(result);
    return result;
}

export async function toStamentWithState(formData:FormData) {
    
    const rawData = {
        year: Number(formData.get('year')),
        month: Number(formData.get('month')),
        day: Number(formData.get('day')),
        hour: Number(formData.get('hour')),
        gender: formData.get('gender')
     }

    redirect('/statement/?year='+rawData.year+'&month='+rawData.month+'&day='+rawData.day+'&hour='+rawData.hour+'&gender='+rawData.gender);
}