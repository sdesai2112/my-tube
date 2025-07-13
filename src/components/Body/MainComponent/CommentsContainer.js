import React from "react";

const commentsData = [
  {
    id: 1,
    name: "Shraddha Desai",
    text: "I am Learning Namaste React from Akshay Saini",
    replies: [],
  },
  {
    id: 2,
    name: "Saee Desai",
    text: "I am Learning Namaste React from Akshay Saini",
    replies: [
      {
        id: 4,
        name: "Akshay Saini",
        text: "I am Teaching Namaste React",
        replies: [
          {
            id: 5,
            name: "Ashish Pawar",
            text: "I am from USA.",
            replies: [],
          },
          {
            id: 6,
            name: "Abhijeet Deshmukh",
            text: "I am a Data Analyst.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Shruti Desai",
    text: "I am Learning Namaste React from Akshay Saini",
    replies: [
      {
        id: 7,
        name: "Satyam Raj",
        text: "I am learning AI-ML.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ name, text }) => {
  return (
    <div className="flex bg-gray-100 mt-2 pl-2 shadow-lg rounded-lg">
      <img
        alt="User"
        className="h-8 w-8 my-auto"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
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
      {comments.map((comment) => (
        <div>
          <Comment key={comment.id} name={comment.name} text={comment.text} />
          <div className="ml-4">
            <CommentsList key={comment.id} comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
