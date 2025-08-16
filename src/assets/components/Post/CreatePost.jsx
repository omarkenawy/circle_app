import React, { useState } from 'react'
import { Button } from '@heroui/react';
import userLogo from '../../icon-7797704_640.png'
import { createPostApi } from '../../services/getAllPostsServices';
export default function CreatePost({ callBack }) {

    const [body, setBody] = useState('');
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [loading, setLoading] = useState(false);



    async function createPost(e) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        body && formData.append('body', body);
        image && formData.append('image', image);
        console.log(formData);

        const response = await createPostApi(formData);
        // console.log(response);
        callBack();
        // console.log(body);
        // console.log(image);
        setLoading(false);
        setBody("");
        setImage(null);
        setImageURL(null);

    }

    function handleImage(imageFile) {
        setImage(imageFile);
        setImageURL(URL.createObjectURL(imageFile));
    }

    function clearBtn() {
        setBody("");
        setImage(null);
        setImageURL(null);
    }

    return <>
        <form onSubmit={createPost} className="form bg-white p-4 my-4 w-2xl mx-auto rounded-md">
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder='write here...' rows={4} className='rounded-md border w-full p-2 resize-none'></textarea>
            <img src={imageURL} className='w-full' />
            <div className="flex justify-between items-center">
                <label className='cursor-pointer hover:text-blue-600'>
                    <input type="file" className='hidden' onChange={(e) => handleImage(e.target.files[0])} />
                    <div className="flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <p>image</p>

                    </div>
                </label>
                <div className="flex p-4 space-x-2">
                    <button onClick={() => clearBtn()} type='reset' className='cursor-pointer'>clear</button>
                    <Button isLoading={loading} type='submit' color='primary'> post </Button>
                </div>
            </div>
        </form>



    </>
}
