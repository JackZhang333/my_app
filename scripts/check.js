require('dotenv').config();

console.log(process.env.POSTGRES_URL);
console.log(process.env.POSTGRES_PRISMA_URL);
console.log(process.env.POSTGRES_URL_NON_POOLING);
console.log(process.env.POSTGRES_USER);
console.log(process.env.POSTGRES_HOST);
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_DATABASE);