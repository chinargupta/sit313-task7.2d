import React, { useState } from 'react';
import './App.css';
import PostTypeSelector from './PostTypeSelector'; // Importing a component for selecting post type
import QuestionForm from './QuestionForm'; // Importing a component for question form
import ArticleForm from './ArticleForm'; // Importing a component for article form
import FindQuestion from './FindQuestion'; // Importing a component for finding questions
import "firebase/firestore"; // Importing Firebase Firestore (make sure Firebase is properly configured)

function App() {
  // State to keep track of the selected post type
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      <h1>New Post</h1>
      
      {/* Component for selecting post type */}
      <PostTypeSelector postType={postType} setPostType={setPostType} />

      {/* Conditional rendering based on the selected post type */}
      {postType === 'question' ? <QuestionForm /> : null} {/* Render QuestionForm when 'question' is selected */}
      {postType === 'article' ? <ArticleForm /> : null} {/* Render ArticleForm when 'article' is selected */}

      {/* Container for finding questions */}
      <div className="Find">
        {postType === 'FindQuestion' ? <FindQuestion /> : null} {/* Render FindQuestion when 'FindQuestion' is selected */}
      </div>
    </div>
  );
}

export default App;
