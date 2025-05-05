import { supabase } from '../utils/client';
import {
    Destiny,
    Infor
} from './definitions';


export async function getStatesByInfor(infor: Infor) {
   
    const { year, month, day, hour } = infor;

    const result = await supabase.rpc('get_state_by_time_all', {
        input_year: year,
        input_month: month,
        input_day: day,
        input_hour: hour,
    })
    const { data, error } = result;
    // console.log('getStatesByInfor', data, error,result);
    const resultRows = data as unknown as Array<Destiny>;

    if (resultRows.length === 0) {
        throw new Error('No results found');
    }
    // console.log(rows, resultRows.map((item) => item.state));
    const destiny: Destiny = {
        score: resultRows[0].score,
        state: resultRows[0].state,
        state_e: resultRows[0].state_e,
        female: resultRows[0].female,
        state_e_f: resultRows[0].state_e_f,
    };
    // console.log(destiny);
    return destiny;
}
export async function getStatesByScore(score: number) {
    const result = await supabase.rpc('get_state_by_score_all', {
        input_score: score,
    })
    const { data, error } = result;
    // console.log('getStatesByInfor', data, error,result);
    const resultRows = data as unknown as Array<Destiny>;

    if (resultRows.length === 0) {
        throw new Error('No results found');
    }
    // console.log(rows, resultRows.map((item) => item.state));
    const destiny: Destiny = {
        score: resultRows[0].score,
        state: resultRows[0].state,
        state_e: resultRows[0].state_e,
        female: resultRows[0].female,
        state_e_f: resultRows[0].state_e_f,
    };
    return destiny;
}