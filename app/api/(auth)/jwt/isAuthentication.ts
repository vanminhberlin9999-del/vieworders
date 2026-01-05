import bcrypt from "bcryptjs";
import process from "node:process";
import {compileNonPath} from "next/dist/shared/lib/router/utils/prepare-destination";

const next_username = process.env.ADMIN_USERNAME;
const hased_password = "$2b$12$zxf7ABw.vutLpWDueqZ1PetLU7IbXlgH3k4jW7HYbowJaBXzAOJNO";

async function isAuthentication (username:string, password:string){
    let isValid = false;
    if(username != next_username) return false;

    if(username === next_username){
        if(!hased_password) return false;
       //  const newpass =  bcrypt.hashSync("123456", 12);
        isValid = await bcrypt.compare(password, hased_password);
    }
    return isValid;
}

export default isAuthentication;