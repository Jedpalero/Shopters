import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllProduct = async () => {
  const response = await axios.get(
    "http://localhost:8081/api/product/get_all_products",
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  // const result = await res.json();
  // return await result;
  return response.data;
};

const useProductFetchAll = () => {
  return useQuery({
    queryKey: ["all-product"],
    queryFn: fetchAllProduct,
    retry: false,
    // refetchOnWindowFocus: true,
  });
};

export default useProductFetchAll;
