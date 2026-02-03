import axios from "axios";

const API_URL = "https://remotive.com/api/remote-jobs"; 

export const fetchRemoteJobs = async () => {
    const response = await axios.get(API_URL);
    return response.data.jobs;
}