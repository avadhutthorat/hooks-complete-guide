import React, { useState, useEffect } from "react";
import axios from "axios";

const HookDataFetch1 = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch(err => setPosts({ title: "No post found" }));
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <ul>
        <li>{posts.title}</li>
      </ul>
    </div>
  );
};

export default HookDataFetch1;
