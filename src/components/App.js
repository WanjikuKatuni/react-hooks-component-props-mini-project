import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  const posts = blogData.posts

  const name="Overreacted";
  const imageSrc= "https://via.placeholder.com/215"
  const blogText="I explain with words and code."



  return (
    <div className="App">

      <Header   name={name}/>
      <About imageUrl={imageSrc} {about={blogText}}/>

      {/* maps through posts */}
      {posts.map((post)=>(

        <ArticleList 
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        />
      ))}
    </div>
  );
}

export default App;
