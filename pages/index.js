import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function Home({ products }) {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product?.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log("data: ", data);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  /**
   * Return 404 page if fetch returns nothing
   */
  if (data?.products?.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //Works only in production
  };
}

export default Home;
