import { useState, useEffect } from "react";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // Make an API call (fetch() is an OOB Node and React function used to collect JSON data from an API):
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            // When that network call returns some data
            // Set our posts state to that data
            setPosts(data);
        }

        fetchData();
    }, []);
    
    return (
        <div>
            <h1>Posts!</h1>
            {/* A common set up - an array over an empty array and return an empty array: */}
            {posts.map((post) => <Post key={post.id} title={post.title} body={post.body} />)}
        </div>
    )
}

export default Posts;