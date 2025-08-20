import { img } from "framer-motion/client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Spinner } from "@heroui/react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { useContext, useState } from "react";
import { createCommentApi } from "../../services/createComment";
import { authContext } from "../../context/AuthContext";
import { createPostApi, deletePostApi, getAllPostsApi } from "../../services/getAllPostsServices";
import CreatePost from "../Post/CreatePost";


//props => post , commentLimit 

export default function PostCard({ post, commentLimit, callback, }) {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState(post.comments);
    const [isUpdating, setIsUpdating] = useState(false);

    const [posts, setPosts] = useState([]);

    let { userData, setUserData } = useContext(authContext)

    async function createComment() {
        if (content == '') { return }
        setLoading(true)
        const response = await createCommentApi(
            content, post.id);
        setLoading(false);
        setContent('');
        return response;
    }


    async function deletePost(postId) {
        const response = await deletePostApi(postId);
        if (response.message) {
            setLoading(true);
            const newPosts = await getAllPostsApi();
            callback();
        }
        setLoading(false)
    }

    return <>

        {isUpdating ? <CreatePost post={post} callBack={callback} isUpdating={isUpdating} setIsUpdating={setIsUpdating}> </CreatePost> :

            <div className="bg-white w-4xl rounded-md shadow-md h-auto py-3 px-3 my-5 mx-auto">
                <div className="flex">
                    <CardHeader photo={post.user.photo} name={post.user.name} date={post.user.createdAt}></CardHeader>
                    {userData?._id === post.user._id && (loading ? (<Spinner />) : (
                        <Dropdown>
                            <DropdownTrigger>
                                <Button>
                                    <svg className="w-16" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round">
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                        <circle cx={5} cy={12} r={1} />
                                    </svg>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem onClick={() => setIsUpdating(true)} key="edit">Edit post</DropdownItem>
                                <DropdownItem
                                    onClick={() => deletePost(post._id)}
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                >
                                    Delete post
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    )
                    )}
                </div>
                <CardBody body={post.body} image={post.image} comments={comments.length} postId={post.id} ></CardBody>
                <div className="flex">
                    <Input value={content} onChange={(e) => setContent(e.target.value)} placeholder="write a comment..."></Input>
                    <Button disabled={!Boolean(content)} isLoading={loading} onPress={() => createComment()} color="primary" className="ms-2"> Add comment </Button>
                </div>

                {comments.length > 0 && comments.slice(0, commentLimit).map((comment) => <CardFooter
                    comment={comment}
                    userData={userData}
                    post={post}
                    key={comment._id}
                    ccontent={comment.content}
                    cphoto={comment.commentCreator.photo}
                    cname={comment.commentCreator.name}
                    cdate={comment.createdAt.split('.', 1)[0].split('T').join(" ")}></CardFooter>)}
            </div>

        }
    </>
}
