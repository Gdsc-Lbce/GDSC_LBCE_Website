import React, { useEffect, useState } from 'react';
import { getDocs , collection} from 'firebase/firestore';
import { db } from '../firebase-config'

function Home() {
    const [ postLists , setPostList] = useState([]);
    const postCollectionRef = collection(db , "posts")

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs( postCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));   // take information  as a array
        };

        getPosts();
    });

  return <div className='homePage'>
      {postLists.map((post) => {
          return <div className='post'> 
          <div className='postHeader'>
              {" "}
              <div className='title'><h2><b> {post.title} </b></h2></div>

          </div>
          <div className='postTextContainer'>
              {post.postText}
          </div>
          <h3>{post.author.name}</h3>
          </div>
      })}
      </div>;
    
};

export default Home;
