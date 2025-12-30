import process from "node:process";

const next_username = process.env["ADMIN_USERNAME"];
const next_password = process.env["ADMIN_PASSWORD"]

function isAuthentication (username:string, password:string){
    return username === next_username && password === next_password
}

export default isAuthentication;