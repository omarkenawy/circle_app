import axios from "axios";



export async function getUserDataApi() {
    try {
        let { data } = await axios.get("https://linked-posts.routemisr.com/users/profile-data", { headers: { token: localStorage.getItem("token") } });
        return data;
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }
}


export async function getAllUserPostsApi() {
    try {
        let { data } = await axios.get(`https://linked-posts.routemisr.com/users/68a21f97fcf033c8b8287720/posts?limit=8`,
            { headers: { token: localStorage.getItem("token") } });
        console.log(data);

        return data;
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }
}

export async function getSinglePostApi(postId) {
    try {
        let { data } = await axios.get("https://linked-posts.routemisr.com/posts/" + postId, {
            headers: { token: localStorage.getItem("token") }
        });
        console.log(data);
        return data
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }
}


export async function addUserPhotoApi(formData) {
    try {
        let { data } = await axios.put("https://linked-posts.routemisr.com/users/upload-photo", formData, {
            headers: { token: localStorage.getItem("token") }
        });
        console.log(data);
        return data
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }
}
