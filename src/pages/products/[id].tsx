import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import NextSEO from "../../components/NextSEO";
import ProductDetails from "../../components/ProductDetails";
//import { useAppSelector } from "@/redux/store";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProductAPI, getProductsAPI } from "@/redux/product/product.api";
import { Product } from "@/utils/types";
//import data from "../../db.json";
type ProductDetailsProps={
    product :Product,
}
const Prodcut = ({product}:ProductDetailsProps) => {
  //const product = useAppSelector((store)=>store.product.data[0])
  //console.log("product",product);
  
  return (
    <>
      <NextSEO
        title="homepage"
        description="Home page for my webpage"
        ogImage="/og-image.png"
        url={new URL("http://localhost:3000/")}
      />
      <Box
        w="calc(11/12)%"
        mt="16"
        maxW="5xl"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Link href="/">
          <Text
            display="flex"
            alignItems="center"
            gap={2}
            textColor="gray.400"
            transition="text-color"
            transitionDuration="200s"
            _hover={{
              textColor: "gray.800",
            }}
          >
            <MdKeyboardBackspace />
            Back to shop
          </Text>
        </Link>
      </Box>
      <ProductDetails product={product} />
    </>
  );
};

export default Prodcut;

export const getStaticPaths:GetStaticPaths =async()=>{
 let res = await getProductsAPI();
 return{
    paths:res.map((product)=>({params:{id: String(product.id)}})),
    fallback:false,
 }
}

export const getStaticProps:GetStaticProps  =async(context)=>{
  const id:any = context.params?.id;
  let res = await getProductAPI(id)
  //console.log(res);
  
  return{
    props:{
        product:res,
    }
  }
}
