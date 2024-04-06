const {db}= require('@vercel/postgres');
const {years,months,days,hours,states} = require('../app/lib/placeholder-data');

async function seedYear(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS year (
            index UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            value INT NOT NULL,
            year1 INT NOT NULL,
            year2 INT NOT NULL
        )`
        console.log('created year table');
    }catch(e){
        console.log('err seeding year', e);
        throw e;
    }
}

async function initYears(client){
    try{
        const insertYear = await Promise.all(years.map(async (year) => {
            const {value, year1, year2} = year;
            await client.sql`
            INSERT INTO year (value, year1, year2) 
            VALUES (${value}, ${year1}, ${year2})
            ON CONFLICT (index) DO NOTHING;
            `;
        }))
    }
    catch(e){
        console.log('err init years', e);
        throw e;
    }
}
async function seedMonth(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS month (
            index UUID DEFAULT uuid_generate_v4() PRIMARY KEY,  
            value INT NOT NULL,
            month INT NOT NULL
        )`
        console.log('created month table');
    }catch(e){
        console.log('err seeding month', e);
        throw e;
    }
}

async function initMonths(client){
    try{
        const insertMonth = await Promise.all(months.map(async (item) => {
            const {value, month} = item;
            await client.sql`
            INSERT INTO month (value, month)
            VALUES (${value}, ${month})
            ON CONFLICT (index) DO NOTHING;
            `;
        }))
    }
    catch(e){
        console.log('err init months', e);
        throw e;
    }
}
async function seedDay(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS day (
            index UUID DEFAULT uuid_generate_v4() PRIMARY KEY,  
            value INT NOT NULL,
            day INT NOT NULL
        )`
        console.log('created day table');
    }catch(e){
        console.log('err seeding day', e);
        throw e;
    }
}

async function initDays(client){
    try{
        const insertDay = await Promise.all(days.map(async (item) => {
            const {value, day} = item;
            await client.sql`
            INSERT INTO day (value, day)
            VALUES (${value}, ${day})
            ON CONFLICT (index) DO NOTHING;
            `;
        }))
    }
    catch(e){
        console.log('err init days', e);
        throw e;
    }
}

async function seedHour(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS hour (
            index UUID DEFAULT uuid_generate_v4() PRIMARY KEY,  
            value INT NOT NULL,
            hour INT NOT NULL
        )`
        console.log('created hour table');
    }catch(e){
        console.log('err seeding hour', e);
        throw e;
    }
}

async function initHours(client){
    try{
        const insertHour = await Promise.all(hours.map(async (item) => {
            const {value, hour} = item;
            await client.sql`
            INSERT INTO hour (value, hour)
            VALUES (${value}, ${hour})
            ON CONFLICT (index) DO NOTHING;
            `;
        }))
    }
    catch(e){
        console.log('err init hours', e);
        throw e;
    }
}

async function seedState(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS state (
            index UUID DEFAULT uuid_generate_v4() PRIMARY KEY,  
            score INT NOT Null,
            state VARCHAR(255) NOT NULL,
            description VARCHAR(255),
            state_en VARCHAR(255),
            description_en VARCHAR(255)
        )`
        console.log('created state table');
    }catch(e){
        console.log('err seeding state', e);
        throw e;
    }
}

async function initStates(client){
    try{
        const insertState = await Promise.all(states.map(async (item) => {
            const {score, state, description, state_en, description_en} = item;
            await client.sql`
            INSERT INTO state (score, state, description, state_en, description_en)
            VALUES (${score}, ${state}, ${description}, ${state_en}, ${description_en})
            ON CONFLICT (index) DO NOTHING;
            `;
        }))
    }
    catch(e){
        console.log('err init states', e);
        throw e;
    }
}
async function main(){
    const client = await db.connect();
    try{
        await seedYear(client);
        await seedMonth(client);
        await seedDay(client);
        await seedHour(client);
        await seedState(client);

        // await initYears(client);
        // await initMonths(client);
        await initDays(client);
        await initHours(client);
        await initStates(client);
        
        await client.end();
    }catch(e){
        console.log(e);
    }finally{
        client.release();
    }
}

main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });