import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("http://localhost:8081/api/auth/user", {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
  // const result = await res.json();
  // return await result;
  return response.data;
};

const useDataFetch = () => {
  return useQuery({
    queryKey: ["data-result"],
    queryFn: fetchData,
    retry: false,
    // refetchOnWindowFocus: true,
  });
};

export default useDataFetch;
