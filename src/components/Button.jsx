const Button = ({ onClickHandler, value, title, color }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold bg-neutral-800`}
    >
      {title}
    </button>
  );
};
export default Button;
