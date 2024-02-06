import React from "react";

const Description = ({ product, sidebar }) => {
  return (
    <div>
      <div
        className={`flex flex-col  md:mr-[120px] items-center md:items-start drop-shadow-lg ${
          sidebar ? "md:ml-[180px]" : "md:ml-[280px]"
        }`}
      >
        <div className="flex items-start justify-start">
          <div className="border p-7 md:w-[200px] w-[180px] text-sm text-center">
            Description
          </div>
          <div className="border p-7 md:w-[200px] w-[180px] text-sm text-center">{`Reviews ${product.reviews}`}</div>
        </div>
        <div className="border md:w-[80rem] w-[22.5rem]">
          <p className="md:w-[70rem] w-[22rem] m-auto md:p-4 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            optio ex sed cumque perspiciatis ullam neque, laborum quod facere
            odit maxime eius distinctio fuga dolores quaerat vero molestiae quas
            ducimus. Fugiat, dolore nisi! Modi perferendis aspernatur non, sed
            eaque, nulla ex dolorum repellendus commodi sequi deserunt pariatur
            ullam molestias eius accusamus dignissimos! Adipisci ullam, labore
            error amet eius molestias libero. Corporis accusantium temporibus,
            deleniti dolor quae consequuntur animi obcaecati necessitatibus
            velit, maiores odit aut veniam numquam perspiciatis recusandae fugit
            reiciendis eius laborum dolorem asperiores? Laborum hic totam dolore
            sit assumenda! Blanditiis deleniti dolore explicabo omnis obcaecati
            quibusdam saepe, quia possimus! Architecto, facere! Soluta dolor
            sint iure eaque dolore natus nulla, impedit quo in adipisci.
            Architecto quam voluptatibus eius harum adipisci!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
