import React, { useEffect, useState } from 'react'
import { getAllPostsApi, getSinglePostApi } from '../services/getAllPostsServices'
import { useParams } from 'react-router-dom';
import PostCard from '../components/Card/PostCard';
import MySkeleton from '../components/MySkeleton';

export default function PostDetails() {

    const { id } = useParams();
    console.log(id);


    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);


    async function getSinglepost() {
        const response = await getSinglePostApi(id)
        if (response.post) {
            setPost(response.post)
            setLoading(false)
        } else {
            return "there is an error"
        }
    }


    useEffect(() => {
        getSinglepost();
        console.log('ssss');

    }, [])

    return <>

        {post ? <PostCard commentLimit={post.comments.length} post={post}></PostCard> : <MySkeleton></MySkeleton>}


    </>
}
