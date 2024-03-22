import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import { useAtom } from "jotai"
import { selectedCategoryAtom } from "../lib/atom"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {

  const [selectedCategory] = useAtom(selectedCategoryAtom);

  if (selectedCategory) {

    return(<>
    <Home CartItem={CartItem} />
    <Shop shopItems={shopItems} addToCart={addToCart} />;
    <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>) 
  }

  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
