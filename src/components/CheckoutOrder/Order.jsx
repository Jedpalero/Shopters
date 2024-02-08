import { onSnapshot, doc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";

const Order = () => {
  const [order, setOrders] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "userCheckout"),
      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setOrders(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  console.log("userCheckout", userCheckout);

  return <div>Order</div>;
};

export default Order;
