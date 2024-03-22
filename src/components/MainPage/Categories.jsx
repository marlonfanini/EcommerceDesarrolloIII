import { useAtom } from "jotai";
import React, { useEffect, useState } from "react"
import { isExpandedAtom, selectedCategoryAtom } from "../../lib/atom"; 


const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  const [apiCategories, setApiCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useAtom(isExpandedAtom);
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://34.229.4.148:3000/category/get");
      const data = await response.json();
      setApiCategories(data);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    console.log("Categoría seleccionada:", categoryName); 

  };

  const mapCategoryToImage = (categoryName) => {
    const mappings = {
      "Alimentación": "./images/category/cat10.png", 
      "Belleza y Salud": "./images/category/cat7.png", 
      "Deportes": "", 
      "Hogar y Jardín": "./images/category/cat4.png", 
      "Juguetes y Bebés": "./images/category/cat9.png", 
      "Libros y Papelería": "./images/category/cat11.png", 
      "Mascotas": "./images/category/cat8.png", 
      "Muebles": "", 
      "Ropa": "./images/category/cat1.png", 
      "Tecnología": "./images/category/cat2.png", 
    };

    return mappings[categoryName] || "path_to_default_image";
  };

  return (
    <>
    {isExpanded && (
      <div className='category'>
        {apiCategories.map((category, index) => {
          const imgPath = mapCategoryToImage(category.category_name);
          return (
            <div className='box f_flex' key={index} onClick={() => handleCategoryClick(category.category_name)}>
              <img src={imgPath} alt={category.category_name} />
              <span>{category.category_name}</span>
            </div>
          )
        })}
      </div>
    )}
  </>
  )
}

export default Categories
