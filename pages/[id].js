import React from "react";
import fs from "fs/promises";
import path from "path";

function ProductDetailPage({ loadedProduct }) {
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>TITLE: {loadedProduct.title}</h1>
      <p>DESCRIPTION: {loadedProduct.description}</p>
    </>
  );
}

// export async function getStaticProps(context){
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const productId = params.id;

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "p1" } }],
    fallback: true,
  };
}

export default ProductDetailPage;
