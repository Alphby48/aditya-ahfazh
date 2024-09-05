const PopupLayout = (props) => {
  const { setPopup, msg } = props;
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center bg-pop">
      <div className="w-1/3 h-60 max-sm:w-5/6 relative flex justify-center items-center bg-blue-200">
        <p className="text-base font-poppins text-black text-center">{msg}</p>
        <i
          className="fa-regular fa-circle-xmark absolute top-0 right-0 text-3xl cursor-pointer text-red-600"
          onClick={() => setPopup(false)}
        ></i>
      </div>
    </div>
  );
};

export default PopupLayout;
