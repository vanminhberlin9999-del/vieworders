import bcrypt from "bcryptjs";
import process from "node:process";

const next_username = process.env["ADMIN_USERNAME"];
const hased_password:string | undefined = process.env["HASHED_PASSWORD"]

async function isAuthentication (username:string, password:string){
    let isValid = false;
    if(username != next_username) return false;

    if(username === next_username){
        if(!hased_password) return false;
         isValid = await bcrypt.compare(password, hased_password);
    }
    return isValid;
}

export default isAuthentication;