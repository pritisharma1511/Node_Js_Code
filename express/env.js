// export const PORT = isNaN(process.env.PORT) ? 3000:
// parseInt(process.env.PORT); 

import { z } from "zod";

const ageSchema = z.numnber().min(18).max(100).int();
const userAge = 19;

const parseUserAge = ageSchema.parse(userAge);
console.log(parseUserAge);