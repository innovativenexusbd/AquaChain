import axios from 'axios';

const API_URL = 'http://localhost:5000/api/fishermen/';

const getUnapprovedFishermen = async () => {
    const res = await axios.get(API_URL + 'unapproved');
    return res.data;
};

const approveFisherman = async (id) => {
    const res = await axios.put(API_URL + `approve/${id}`);
    return res.data;
};

const getApprovalStatus = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get(API_URL + 'approval-status', {
        headers: { 'x-auth-token': token }
    });
    return res.data;
};

export default {
    getUnapprovedFishermen,
    approveFisherman,
    getApprovalStatus
};
