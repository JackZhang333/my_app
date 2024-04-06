import { sql } from '@vercel/postgres';
import {
    Destiny,
    Infor
} from '../lib/definitions';

export async function getStatesByInfor(infor: Infor) {
    const { year, month, day, hour } = infor;
    const destiny = await sql<Destiny>`
    SELECT s.state, s.state_en, s.description, s.description_en,s.score
    FROM state s
    INNER JOIN year y ON (y.year2 = ${year} OR (y.year1 = ${year} AND y.year2 IS NULL))
    INNER JOIN month m ON (m.month = ${month})
    INNER JOIN day d ON (d.day = ${day})
    INNER JOIN hour h ON (h.hour = ${hour})
    WHERE (y.value + m.value + d.value + h.value) = s.score
   `;
    return destiny;
}