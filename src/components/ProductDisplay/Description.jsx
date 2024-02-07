import React from "react";

const Description = ({ product, sidebar }) => {
  return (
    <div>
      <div
        className={`flex flex-col lg:items-start drop-shadow-lg ${
          sidebar
            ? "lg:ml-[120px] lg:mr-[140px]"
            : "lg:ml-[160px] lg:mr-[100px]"
        }`}
      >
        <div className="flex items-start justify-start">
          <div className="border w-full pt-5 pb-5 lg:pr-[80px] lg:pl-[80px] text-sm text-center">
            Description
          </div>
          <div className="border w-full pt-5 pb-5 lg:pr-[80px] lg:pl-[80px] text-sm text-center text-nowrap">{`Reviews ${product.reviews}`}</div>
        </div>
        <div className="border">
          <p className="m-auto lg:p-8 p-5">
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
