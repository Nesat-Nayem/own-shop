import { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  const loadBlogs = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCategories(data?.categoryList);
  };

  useEffect(() => {
    loadBlogs("https://lit-sands-58263.herokuapp.com/api/category/getcategories");
  }, [categories]);

  return { categories };
};

export default useCategory;