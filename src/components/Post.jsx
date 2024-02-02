import { PropTypes } from "prop-types";
import like from "../assets/like.png";
import comment from "../assets/comment.png";
import share from "../assets/share.png";
import NoImage from "../assets/NoImage.png";

const Post = (props) => {
  const { postData, key } = props;

  return (
    <div
      key={key}
      className=" bg-white text-black border-gray-300 h-auto w-72 p-5 rounded-xl flex flex-col justify-between shadow-sm shadow-white hover:shadow-xl hover:shadow-white"
    >
      {/* Post Image */}
      <img
        src={postData.postImage}
        alt={postData.title}
        className="w-full h-48 object-contain mb-2"
        onError={(event) => {
          event.target.src = NoImage;
        }}
      />
      {/* post Title */}
      <h2 className="text-xl font-bold mb-2">{postData.title}</h2>

      {/* Like,comment and shaer */}
      <div className="flex gap-4 items-center text-center justify-evenly">
        <p className="mb-2 hover:scale-110 ease-in-out transition-all cursor-pointer">
          {postData.postLikes}{" "}
          <img
            className="w-8 h-8 object-contain hover:scale-125 ease-in-out transition-all"
            src={like}
            alt="likes"
          />
        </p>
        <p className="mb-2 hover:scale-110 ease-in-out transition-all cursor-pointer">
          {postData.postComments}{" "}
          <img
            className="w-7 h-7 object-contain hover:scale-125 ease-in-out transition-all"
            src={comment}
            alt="comments"
          />
        </p>
        <p className="mb-2 hover:scale-110 ease-in-out transition-all cursor-pointer">
          {postData.postShares}{" "}
          <img
            className="w-6 h-6 object-contain hover:scale-125 ease-in-out transition-all"
            src={share}
            alt="shares"
          />
        </p>
      </div>
      {/* Posted by */}
      <p className="text-gray-500 text-sm">Posted by -- {postData.username}</p>
      {/* post time */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-500">
          {postData.postTime} {postData.postDate}
        </p>
        {/* post platform */}
        <img
          src={postData.platformLogo}
          alt={postData.platformLogo}
          className="h-6 w-6 object-contain hover:scale-150 ease-in-out transition-all "
        />
      </div>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.object.isRequired,
  key: PropTypes.number,
};

export default Post;
