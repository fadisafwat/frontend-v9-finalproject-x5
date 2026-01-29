import ProductGallery from "../components/Product/ProductGallery";
import ProductInfo from "../components/Product/ProductInfo";
import ProductOptions from "../components/Product/ProductOptions";
import ShippingInfo from "../components/Product/ShippingInfo";
import ProductFeatures from "../components/Product/ProductFeatures";
import FaqSection from "../components/FAQ/FaqSection";
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
      <section>
        <FaqSection/>
      </section>
    </>
  );
};

export default Products