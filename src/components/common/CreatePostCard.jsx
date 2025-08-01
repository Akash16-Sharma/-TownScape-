import { Divide } from 'lucide-react';
import React, { useState } from 'react';

const CreatePostCard =({onPost})=>{
    const[content,setContent]=useState('');

    const handlePost=()=>{
        if(content.trim()){
            const newPost={
                id:Date.now(),
                username:'you',
                time:'Just now',
                content,
                likes:0,
                comments:0,
                reposts:0
            };
            onPost(newPost);
            setContent('');
        }
    };

    return(
        <div className="bg-white dark:bg-zinc-900 p-4-rounded-x1 shadow mb-4">
            <textarea
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                placeholder="What's happening?"
                className="w-full bg-zinc-100 dark:bg-zinc-800 p-2 rounded resize-none focus:outline-none"
                 rows={3}
            />
            <button
                onClick={handlePost}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
             Post
            </button>
        </div>
    );
};
export default CreatePostCard;