import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Book } from "@/utilities/mocks/types";

const getBook = async () => {
  try {
    const res = await axios.get(
      "https://my.backend/book"
      // { headers: { authorization: API_TOKEN } }
    );
    return await (res.data as Promise<Book>);
  } catch (err) {
    console.error("error: ", err);
    throw new Error("Error getting coins");
  }
};

const useBook = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Book"],
    queryFn: () => getBook(),
  });

  return {
    book: data,
    isLoading,
    isError: !!error,
  };
};

function BookPage() {
  const { isLoading, isError, book } = useBook();

  return (
    <div>
      {isLoading && <div>Loading book...</div>}
      {isError && <div>Unable to fetch book.</div>}
      {book ? <div>{book.title}</div> : <div>Loading book...</div>}
    </div>
  );
}

export default BookPage;
