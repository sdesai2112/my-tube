import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMesages } from "../../../utils/store/slices/chatSlice";
import { generateRandomNames } from "../../../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState(null);
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMesages({
          name: generateRandomNames(),
          message: generateRandomNames(20),
        })
      );
    }, 1500);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMesages({
              name: "Saee",
              message: liveMessage,
            })
          );
          setLiveMessage(null);
        }}
        className="w-full p-2 ml-2 border border-black"
      >
        <input
          type="text"
          className="px-2 w-94"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 px-2 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
