import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Sports",
    "Movies",
    "Cricket",
    "Cooking",
    "Mantras",
    "Motivation",
    "Gadget",
    "Pop Music",
    "Lessons",
    "Guitar",
  ];

  return (
    <div className="flex">
      {buttonList.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
