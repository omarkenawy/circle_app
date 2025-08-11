import axios from "axios";




export async function sendRegisterData(userData) {
    try {
        let { data } = await axios.post("https://linked-posts.routemisr.com/users/signup", userData);
        return data
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }

}