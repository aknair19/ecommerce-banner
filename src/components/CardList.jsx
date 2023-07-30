import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allProducts, productsByCategory } from "../constants";
import {
  getProducts,
  getProductsOnSearch,
  getSearchInput,
} from "../utils/slice/appSlice";
const CardList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.app.products);
  const inputValue = useSelector((store) => store.app.searchInput);
  const searchProducts = useSelector((store) => store.app.searchProducts);
  const selectedCategory = useSelector((store) => store.app.category);
  const [category, setCategory] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(allProducts);
      dispatch(getProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsBySearch = () => {
    const data = products.filter((product) =>
      product?.title.toLowerCase().includes(inputValue)
    );
    dispatch(getProductsOnSearch(data));
  };

  const getProductByCategory = async () => {
    try {
      if (selectedCategory !== "all category") {
        const { data } = await axios.get(
          productsByCategory + `/${selectedCategory}`
        );
        setCategory(data);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      getProductsBySearch();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  useEffect(() => {
    getProductByCategory();
  }, [selectedCategory]);

  return inputValue === "" && selectedCategory === "" ? (
    <div className=" flex flex-wrap w-5/6 gap-4  ">
      {products.map((product) => (
        <Card product={product} key={product?.id} />
      ))}
    </div>
  ) : searchProducts.length > 0 ? (
    <div className=" flex flex-wrap w-5/6 gap-4  ">
      {searchProducts.map((product) => (
        <Card product={product} key={product?.id} />
      ))}
    </div>
  ) : category.length > 0 ? (
    <div className=" flex flex-wrap w-5/6 gap-4  ">
      {category.map((product) => (
        <Card product={product} key={product?.id} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center gap-4 justify-end  h-32">
      <p className="font-bold text-2xl">No products found ☹️</p>
      <button
        className="border rounded-lg p-2 bg-yellow-400 font-semibold"
        onClick={() => dispatch(getSearchInput(""))}
      >
        Explore Products
      </button>
    </div>
  );
};

export default CardList;
