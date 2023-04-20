import axios from "axios";
import { BASE_URL } from "./Helper";

export function Facultylogin(faculty) {
    return axios.post(BASE_URL+'/faculty/login',faculty);
}