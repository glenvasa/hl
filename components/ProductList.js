import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";
import Image from "next/image";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/images/snacks.png" width={190} height={170} alt="logo" />
      </div>

      <h1 className={styles.title}>LIVE YOUR BEST, HEALTHY LIFE</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat libero
        atque odio quia doloribus, distinctio quos reiciendis sapiente quod
        natus facere voluptatem eius quis consequuntur?
      </p>
      <div className={styles.wrapper}>
        {productList.map(product => <ProductCard key={product._id} product={product}/>)};   
      </div>
    </div>
  );
};

export default ProductList;
