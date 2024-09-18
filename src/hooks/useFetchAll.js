import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllData = async () => {
  const response = await axios.get(
    "http://localhost:8081/api/user/get_all_users",
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  // const result = await res.json();
  // return await result;
  return response.data;
};

const useFetchAll = () => {
  return useQuery({
    queryKey: ["all-result"],
    queryFn: fetchAllData,
    retry: false,
    // refetchOnWindowFocus: true,
  });
};

export default useFetchAll;
