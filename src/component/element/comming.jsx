const CommingSoon = (props) => {
  const { setIsComming } = props;
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center">
      <div className="w-1/3 h-60 max-sm:w-5/6 relative flex justify-center items-center bg-lime-400">
        <h1 className="text-3xl font-poppins text-white">Comming Soon</h1>
        <i
          className="fa-regular fa-circle-xmark absolute top-0 right-0 text-3xl cursor-pointer"
          onClick={() => setIsComming(false)}
        ></i>
      </div>
    </div>
  );
};

export default CommingSoon;
