import React, { useEffect, useState } from 'react'
import PostCard from '../components/Card/PostCard'
import { getAllPostsApi } from '../services/getAllPostsServices';
import MySkeleton from '../components/MySkeleton';
import CreatePost from '../components/Post/CreatePost';



export default function NewsFeedPage() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getAllPosts() {
        const response = await getAllPostsApi();
        if (response.message) {
            setPosts(response.posts)
            setLoading(false)
        } else {
            return "there is an error"
        }
    }

    useEffect(() => {
        getAllPosts();
    }, [])


    return <>

        {/* callBakck={} */}

        <CreatePost callBack={getAllPosts} ></CreatePost>

        {posts.length ? posts.map((post) => <PostCard callback={getAllPosts} key={post.id} post={post} commentLimit={1}></PostCard>) : <MySkeleton></MySkeleton>}
    </>
}
