import api from "../helper/api.manager";

export const fetchAdminData = async () => {
    const response = await api.get('/users/getAdmins');
    const options = []
    for (let i = 0; i < response.data.length; i++) {
        options.push({
            title: response.data[i].name,
            value: response.data[i].id
        })
    }
    return options;
};