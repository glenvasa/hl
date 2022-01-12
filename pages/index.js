import {useState} from 'react'
import axios from 'axios'
import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import AddButton from '../components/AddButton';
import styles from "../styles/Home.module.css";
import AddProduct from '../components/AddProduct';

export default function Home({productList, admin}) {
  const [close, setClose] = useState(true)

// client side data fetching if not using Next
//  const getProducts = async () => {
//    const products = await fetch('api/products')
//    const data = await products.json()
//    console.log(data)
//     return data
//  }

//   useEffect(() => {
//     getProducts()
//     }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Your H-Life Rep</title>
        <meta
          name="description"
          content="Easily order and track your favorite H-Life Products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose}/>}
      <ProductList productList={productList}/>
      {!close && <AddProduct setClose={setClose} />}
    </div>
  );
}

export async function getServerSideProps(ctx) {

  const myCookie = ctx.req?.cookies || ''
  let admin = false

  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }

  const res = await axios.get('http://localhost:3000/api/products')
  

  return {
    props: {
      productList: res.data.products,
      admin
    }
  }
}
