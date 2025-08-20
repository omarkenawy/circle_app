import axios from "axios"




export async function createCommentApi(content, postId) {
    try {
        let { data } = await axios.post("https://linked-posts.routemisr.com/comments",
            { content: content, post: postId }, { headers: { token: localStorage.getItem("token") } },
        )
        return data;
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }

}

export async function deletCommentApi(commId) {
    try {
        let { data } = await axios.post("https://linked-posts.routemisr.com/comments/" + commId,
            { headers: { token: localStorage.getItem("token") } },
        )
        return data;
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }

}


export async function getPostCommentApi(postId) {
    try {
        let { data } = await axios.get(`https://linked-posts.routemisr.com/posts/${postId}/comments`,
            { headers: { token: localStorage.getItem("token") } },
        )
        return data;
    } catch (err) {
        console.log(err.response.data.error);
        return err.response.data.error;
    }


}
