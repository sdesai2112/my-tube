import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMesages } from "../../../utils/store/slices/chatSlice";
import { generateRandomNames } from "../../../utils/helper";

const LiveChat = () => {
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
    }, 2000);
  }, []);

  return (
    <div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chatMessage, index) => (
        <ChatMessage
          key={index}
          name={chatMessage.name}
          message={chatMessage.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
