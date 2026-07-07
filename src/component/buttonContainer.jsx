import style from "./buttonContainer.module.css";

const ButtonConatiner = () => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={style.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonConatiner;
