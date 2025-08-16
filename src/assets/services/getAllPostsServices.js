import axios from "axios";

const headers = {

}


export async function getAllPostsApi() {
    try {
        let { data } = await axios.get("https://linked-posts.routemisr.com/posts?sort=-createdAt", {
            headers: {
                token: localStorage.getItem("token")
            }
        });
        console.log(data);
        return data
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

export async function createPostApi(formData) {
    try {
        let { data } = await axios.post("https://linked-posts.routemisr.com/posts", formData, {
            headers: { token: localStorage.getItem("token") }
        });
        console.log(data);
        return data
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }
}