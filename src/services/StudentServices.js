import axios from "axios";
import { BASE_URL } from "./Helper";



const token = localStorage.getItem("token");

export  function Studentlogin(student) {
    
    return axios.post(BASE_URL+'/student/login',student);
    
}
export  function fetchStudentSubjectwise(subject){
    
    return   axios.get(`${BASE_URL}/3rdyear/csit-2/subjects/${subject}`);
}
export function updateAttandanceSubjectwise(subject, enrollment) {
    return axios.put(BASE_URL+'/updateattandance/'+subject+"/"+enrollment)
}
export function markAbsentSubjectwise(subject, enrollment) {
    return axios.put(BASE_URL+'/markabsent/'+subject+"/"+enrollment)
}
export function totalAttandence(enrollment) {
    return axios.get(BASE_URL+'/fetchTotalAttendence/'+enrollment)
}
export function AttandenceSubjectWise(enrollment) {
    return axios.get(BASE_URL+'/student/academics/attendance/'+enrollment)
}
