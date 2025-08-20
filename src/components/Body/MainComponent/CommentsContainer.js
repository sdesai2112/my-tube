import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../../utils/constants";
import { addComments } from "../../../utils/store/slices/commentsSlice";

const Comment = ({ name, text, image }) => {
  return (
    <div className="flex bg-gray-100 mt-2 pl-2 shadow-lg rounded-lg">
      <img
        alt="User"
        className="h-8 w-8 my-auto rounded-2xl"
        src={image}
        // src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="mx-2 py-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <div>
          <Comment
            key={comment?.id}
            name={
              comment?.snippet?.topLevelComment?.snippet?.authorDisplayName ??
              comment?.snippet?.authorDisplayName
            }
            text={
              comment?.snippet?.topLevelComment?.snippet?.textDisplay ??
              comment?.snippet?.textDisplay
            }
            image={
              comment?.snippet?.topLevelComment?.snippet
                ?.authorProfileImageUrl ??
              comment?.snippet?.authorProfileImageUrl
            }
          />
          <div className="ml-8">
            <CommentsList
              key={comment?.id}
              comments={comment?.replies?.comments}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  const videoData = useSelector((store) => store.videoDetails);
  const commentsData = useSelector((store) => store.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const commentsDetails = await fetch(
      API.RETRIEVE_COMMENTS +
        videoData?.id +
        "&key=" +
        process.env.REACT_APP_API_KEY
    );
    const json = await commentsDetails.json();
    dispatch(addComments(json.items));
  };

  return (
    commentsData?.length > 0 && (
      <div className="m-5 p-2">
        <h1 className="font-bold text-2xl">Comments:</h1>
        <CommentsList comments={commentsData} />
      </div>
    )
  );
};

export default CommentsContainer;
