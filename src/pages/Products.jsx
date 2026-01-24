import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductOptions from "../components/ProductOptions";
import ShippingInfo from "../components/ShippingInfo";
import ProductFeatures from "../components/ProductFeatures";
import "./product.css";


const Products = () => {
  return (
     <>
    
      <section className="rr-product marginLeftRight">
      <ProductGallery />
      <div className="right">
        <ProductInfo />
        <ProductOptions />
        <ShippingInfo />
        <ProductFeatures />
      </div>
   
    </section>
     </>
  );
};

export default Products