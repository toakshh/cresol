import Post from "./Post";
import { useState } from "react";
import { instaPostsMim, fbPostMimic, twitterPostMim } from "../constant";
const Feed = () => {
  const [postData] = useState([
    ...instaPostsMim,
    ...fbPostMimic,
    ...twitterPostMim,
  ]);
  return (
    <div className="min-h-screen bg-slate-300 flex flex-wrap gap-10 p-10 ease-in-out transition-all justify-center">
      {postData.map((eachPost) => {
        return <Post key={eachPost.id} postData={eachPost} />;
      })}
    </div>
  );
};

export default Feed;
