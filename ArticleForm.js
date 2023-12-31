import React, { useState } from 'react';
import './ArticleForm.css';

// Import Firebase database related functions and Firestore functions
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Assuming you're importing a Firebase instance
import Image from './image'; // Importing an Image component

function ArticleForm() {
  // Define and initialize state variables for the form inputs
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [article, setArticle] = useState("");
  const [tag, setTag] = useState("");

  // Reference to the Firestore collection where data will be stored
  const userCollectionRef = collection(db, "article");

  // Function to write user data to Firestore
  const writeUserData = async () => {
    // Use Firestore's `addDoc` function to add a document to the "article" collection
    await addDoc(userCollectionRef, { title: title, abstract: abstract, article: article, tag: tag }).then(() => {
      alert("Data Uploaded!"); // Display an alert when data is successfully uploaded
    });
  };

  return (
    <>
      <div className="img">
        <h2>Add an image:</h2>
        <Image />
      </div>
      <div className='articleHeader'>
        <h2>What do you want to ask or share</h2>
        <h4>This section is designed based on the type of the post. It could be developed by conditional rendering. For an article, the following section would be appeared.</h4>
        <div className='title'>
          <label>Title:</label>
          {/* Input field for the article title */}
          <input type="text" placeholder="Enter a descriptive title" onChange={(event) => { setTitle(event.target.value) }} />
        </div>
        <div className='Abstract'>
          <label>Abstract:</label>
          {/* Input field for the article abstract */}
          <input type="text" placeholder="Enter a 1-paragraph abstract" onChange={(event) => { setAbstract(event.target.value) }} />
        </div>
        <div className='Article'>
          <label>Article Text:</label>
          {/* Input field for the article text */}
          <input type="text" placeholder="Enter a 1-paragraph abstract" onChange={(event) => { setArticle(event.target.value) }} />
        </div>
        <div className='Tag'>
          <label>Tags:</label>
          {/* Input field for tags */}
          <input type="text" placeholder="Please add up to 3 tags to describe what your article is about e.g., java" onChange={(event) => { setTag(event.target.value) }} />
        </div>
        {/* Button to trigger the writeUserData function */}
        <button onClick={writeUserData} className="Button">Post</button>
      </div>
    </>
  );
}

export default ArticleForm;
