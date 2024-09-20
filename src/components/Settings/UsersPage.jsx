const UsersPage = (data) => {
  return (
    <>
      <h1 className="font-bold text-xl mt-8 text-center">ORDER SUMMARY</h1>
      <div className="grid grid-cols-3 justify-between text-center border p-2 mt-5 uppercase font-semibold">
        <p>Id</p>
        <p>Qty</p>
        <p>Total</p>
      </div>
      {data ? (
        // for orders list(purchased)
        // <>
        //   {order.length ? (
        //     <>
        //       {order?.map((item) => (
        //         <div
        //           key={item.id}
        //           className="grid grid-cols-3 justify-between text-center border p-2 lg:text-lg text-sm"
        //         >
        //           <p className="lg:text-lg text-xs">{item.id}</p>
        //           <p>{item.totalQty}</p>
        //           <p>${item.totalAmount}</p>
        //         </div>
        //       ))}
        //     </>
        //   ) : (
        //     <>
        //       <div className="flex justify-center mt-[5rem] pb-[10rem]">
        //         <p className="">Your Order Summary is Empty</p>
        //       </div>
        //     </>
        //   )}
        // </>
        <>
          <div className="flex justify-center mt-[5rem] pb-[10rem]">
            <p className="">Your Order Summary is Empty</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-[5rem] pb-[10rem]">
            <p className="">Please Login to see your orders.</p>
          </div>
        </>
      )}
    </>
  );
};

export default UsersPage;
