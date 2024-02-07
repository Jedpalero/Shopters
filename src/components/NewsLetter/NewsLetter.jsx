const NewsLetter = ({ sidebar }) => {
  return (
    // md:w-[60rem] w-[22rem] md:h-[30rem] h-[15rem]
    <div
      className={`flex flex-col justify-center items-center box-border gap-4  bg-gradient-to-t from-neutral-300 rounded-lg drop-shadow-xl text-black ${
        sidebar
          ? "lg:ml-[6rem] lg:mr-[6rem] pt-[60px] pb-[60px]"
          : "pt-[100px] pb-[100px] sm:ml-[10rem] sm:mr-[10rem]"
      }`}
    >
      <div
        className={`mt-12 text-lg font-semibold flex items-center text-center ${
          sidebar ? "lg:text-xl" : "lg:text-3xl"
        }`}
      >
        Get Exclusive Offers On Your Email
      </div>
      {/* md:w-[25rem] w-[15rem] */}
      <p
        className={` text-xs flex items-center text-center ${
          sidebar ? "lg:text-sm" : "lg:text-lg"
        }`}
      >
        Subscribe to our newsletter and stay updated for our new product
      </p>
      <div>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Your Email Id"
          // md:w-[25rem]
          className="bg-transparent border md:p-3 p-1  rounded-l-full md:text-[15px] text-xs"
        />
        <button className="border border-black md:p-3 p-1 bg-black rounded-r-full md:text-[15px] text-xs text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
