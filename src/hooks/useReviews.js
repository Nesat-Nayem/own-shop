import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  const loadBlogs = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setReviews(data);
  };

  useEffect(() => {
    loadBlogs("http://localhost:7070/api/postreview");
  }, [reviews]);

  return { reviews };
};

export default useReviews;