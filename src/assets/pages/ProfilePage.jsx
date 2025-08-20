import React, { useContext, useEffect, useState } from 'react'
import { addUserPhotoApi, getAllUserPostsApi } from '../services/userData';
import { Button, Dropdown, DropdownItem, DropdownTrigger, Input, Spinner } from '@heroui/react';
import userLogo from '../icon-7797704_640.png'
import { authContext } from '../context/AuthContext';
import PostCard from '../components/Card/PostCard';
import MySkeleton from '../components/MySkeleton';


export default function ProfilePage(callBack) {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(" ");
  const [imageURL, setImageURL] = useState(" ");

  let { userData } = useContext(authContext);



  async function getAllUserPosts() {
    const response = await getAllUserPostsApi();
    if (response.message) {
      setPosts(response.posts);
      setLoading(false);
    } else {
      return "There are no posts"
    }
  }

  async function uploadImage(imageFile) {
    setLoading(true);
    const formData = new FormData();
    formData.append("photo", imageFile);
    const response = await addUserPhotoApi(formData)
    console.log("s" + response);
    if (response.message) {
      setImage(imageFile);
      setImageURL(URL.createObjectURL(imageFile));
      setLoading(false)
    }

  }


  useEffect(() => {
    getAllUserPosts();
  }, [])


  return <>

    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <img className="w-32 h-32 rounded-full mx-auto" src={userData?.photo} alt="Profile picture" />
      <h2 className="text-center text-2xl font-semibold mt-3">{userData?.name}</h2>
      <p className="text-center text-gray-600 mt-1">{userData?.email}</p>
      <p className="text-center text-gray-600 mt-1"> {new Date(userData?.dateOfBirth).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}</p>
      <p className="text-center text-gray-600 mt-1">{userData?.gender}</p>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-gray-600 mt-2">John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
      </div>

      <label className='cursor-pointer  hover:text-blue-600'>
        <input type="file" className='hidden' onChange={(e) => uploadImage(e.target.files[0])} />
        <div className="flex space-x-2 mt-4 bg-amber-50 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <p>Add Photo</p>

        </div>
      </label>
    </div>



    {posts.length ? posts.map((post) => <PostCard key={post.id} post={post} commentLimit={1}></PostCard>) : <MySkeleton></MySkeleton>}





  </>
}
