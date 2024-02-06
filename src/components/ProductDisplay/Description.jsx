import React from "react";

const Description = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col ml-[120px] p-3">
        <div className="flex items-start">
          <div className="border p-7 w-[200px] text-sm text-center">
            Description
          </div>
          <div className="border p-7 w-[200px] text-sm text-center">{`Reviews ${product.reviews}`}</div>
        </div>
        <div className="border w-[100rem]">
          <p className="w-[94rem] m-auto p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            adipisci accusamus nemo incidunt voluptatum ea perspiciatis hic.
            Vero sit delectus autem dolore quasi nemo laborum similique!
            Reprehenderit rerum consequuntur repudiandae? Officia nobis unde
            nemo officiis asperiores. Delectus optio fuga ipsum necessitatibus
            voluptatibus, iure commodi. Quod maiores quisquam nihil labore velit
            nemo sapiente, porro nulla a sed dicta, enim fugiat voluptatum?
            Reprehenderit placeat cumque ea necessitatibus maiores eos corporis
            accusantium ex, facere quos exercitationem temporibus harum ullam
            molestias deserunt. Pariatur obcaecati ipsum voluptate laudantium
            hic repellendus repellat eos incidunt expedita voluptatum! Soluta
            rem illo a perferendis? Voluptates corporis quos quasi fugit
            excepturi. Quidem similique enim porro cum fuga accusantium
            quibusdam voluptate quaerat aliquid, voluptatibus eos, velit,
            deleniti accusamus facere necessitatibus amet. Quibusdam explicabo
            quaerat labore! Dolores repudiandae saepe quam nobis natus harum non
            sit iure quia modi! Voluptates fuga aut soluta consectetur ducimus
            molestiae, quia eaque. Reprehenderit ex minima eum? Officiis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
