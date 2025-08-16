import { img } from "framer-motion/client";

import { Button, Input } from "@heroui/react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { useState } from "react";
import { createCommentApi } from "../../services/createComment";


//props => post , commentLimit 

export default function PostCard({ post, commentLimit }) {
    const [content, setContent] = useState(" ");
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState(post.comments);

    async function createComment() {
        if (content == '') { return }
        setLoading(true)
        const response = await createCommentApi(
            content, post.id);
        setLoading(false);
        setContent('');
        return response;
    }

    return <>

        <div className="bg-white w-4xl rounded-md shadow-md h-auto py-3 px-3 my-5 mx-auto">
            <CardHeader photo={post.user.photo} name={post.user.name} date={post.user.createdAt}></CardHeader>
            <CardBody body={post.body} image={post.image} comments={comments.length} postId={post.id} ></CardBody>
            <div className="flex">
                <Input value={content} onChange={(e) => setContent(e.target.value)} placeholder="write a comment..."></Input>
                <Button disabled={!Boolean(content)} isLoading={loading} onPress={() => createComment()} color="primary" className="ms-2"> Add comment </Button>
            </div>
            {comments.length ? comments.slice(0, commentLimit).map((comment) => <CardFooter
                key={comment._id}
                ccontent={comment.content}
                cphoto={comment.commentCreator.photo}
                cname={comment.commentCreator.name}
                cdate={comment.createdAt.split('.', 1)[0].split('T').join(" ")}></CardFooter>) : "there are no comments "}
        </div>


    </>
}
