import axios from "axios"


const headers = {
    token: localStorage.getItem("token")
}

export async function createCommentApi(content, postId) {
    try {
        let { data } = await axios.post("https://linked-posts.routemisr.com/comments",
         { content: content, post: postId },   { headers }, 
        )
        return data;
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }

}