// import { sql } from '@vercel/postgres';
import pool from './db';
import {
    Destiny,
    Infor
} from './definitions';

export async function getStatesByInfor(infor: Infor) {
    const { year, month, day, hour } = infor;
    const [rows] = await pool.query(`
    SELECT s.state,s.score,s.state_e
    FROM state s
    INNER JOIN year y ON (y.year2 = ${year} OR (y.year1 = ${year} AND y.year2 IS NULL))
    INNER JOIN month m ON (m.index = ${month})
    INNER JOIN day d ON (d.index = ${day})
    INNER JOIN hour h ON (h.index = ${hour})
    WHERE (y.value + m.value + d.value + h.value) = s.score
   `);
    const resultRows = rows as Array<{ state: string,state_e: string, score: number }>;

    if (resultRows.length === 0) {
        throw new Error('No results found');
    }
    // console.log(rows, resultRows.map((item) => item.state));
    const destiny: Destiny = {
        score: resultRows[0].score,
        state: resultRows[0].state,
        state_e: resultRows[0].state_e
    };

    return destiny;
}