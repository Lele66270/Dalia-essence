import React, { useState, useEffect} from "react";
import { fetchPost } from "../mock/mockapi";

const PostList = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchPost().then((data) => {
            setPost(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Letter to myself</h1>
            {post.map((post) => (
                <div className="Letter">
                    <h2 className="postid">{post.id}</h2><h2 className="posttitle">{post.title}</h2><h2 className="postdate">{post.date}</h2>
                    <p>{post.example}</p>
                    <button className="Modificabutton"> modify here</button>
                </div>
            ))}
        </div>
    );
}

export default PostList;