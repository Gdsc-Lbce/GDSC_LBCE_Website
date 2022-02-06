import { async } from '@firebase/util';
import React, {useEffect, useState} from 'react';
import { addDoc, collection} from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate} from 'react-router-dom';

function CreatePost( isAuth) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postCollectionRef = collection(db , "posts")
    let navigate = useNavigate();
    const CreatePost = async() => {
        await addDoc(postCollectionRef, {
            title, 
            postText, 
            author : {name : auth.currentUser.displayName, id: auth.currentUser.uid}
        });
        navigate("/");
    };
    // redirect to login page if user want to create post
    useEffect(() => {
        if (!isAuth) {
          navigate("/");
        }
      }, []);

  return (
    <div className="createPostPage">
        <div className='cpContainer'>
            <h1>Create A Blog!</h1>
            <div className='inputGp'>
                <label>Title of Blog : </label>
                <input placeholder='Title...' onChange={(event) => {setTitle(event.target.value);
                }}
                />
                
            </div>
            <div className='inputGp'>
            <label>Post : </label>
            <textarea placeholder='Write here...'  onChange={(event) => {setPostText(event.target.value);
                }}
                />
            </div>
            <button onClick={CreatePost}>Sumbit Blog</button>
        </div>
    </div>

  );
};

export default CreatePost;
