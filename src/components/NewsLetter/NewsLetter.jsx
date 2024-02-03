const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto md:w-[60rem] w-[22rem] md:h-[30rem] h-[15rem] md:gap-[60px] gap-4 md:mb-12 mb-[60px] bg-gradient-to-t from-black rounded-lg drop-shadow-xl">
      <div className="mt-12 md:text-4xl text-lg font-semibold">
        Get Exclusive Offers On Your Email
      </div>
      <p className="text-center md:text-lg text-xs md:w-[25rem] w-[15rem]">
        Subscribe to our newsletter and stay updated for our new product
      </p>
      <div>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Your Email Id"
          className="bg-transparent border md:p-3 p-1 md:w-[25rem] rounded-l-full md:text-[15px] text-xs"
        />
        <button className="border border-black md:p-3 p-1 bg-black rounded-r-full md:text-[15px] text-xs">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
