const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-[80rem] h-[30rem] md:gap-[60px] gap-4 md:mb-12 mb-[60px] bg-gradient-to-t from-black rounded-lg">
      <div className="mt-12 text-4xl font-semibold">
        Get Exclusive Offers On Your Email
      </div>
      <p>Subscribe to our newsletter and stay updated for our new product</p>
      <div>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Your Email Id"
          className="bg-transparent border p-3 w-[25rem] rounded-l-full"
        />
        <button className="border border-black p-3 bg-black rounded-r-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
