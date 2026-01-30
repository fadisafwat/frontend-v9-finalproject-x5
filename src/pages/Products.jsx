import ProductGallery from "../components/Product/ProductGallery";
import ProductInfo from "../components/Product/ProductInfo";
import ProductOptions from "../components/Product/ProductOptions";
import ShippingInfo from "../components/Product/ShippingInfo";
import ProductFeatures from "../components/Product/ProductFeatures";

import "../components/Product/product.css";

import FaqSection from "../components/FAQ/FaqSection";

import SliderTestimonials from "../components/SliderTestimonials/SliderTestimonials";
import ProductReviews from "../components/CustomersLove/ProductReviews";



const Products = () => {
  return (
    <>
      {/* <section className="rr-product marginLeftRight"> */}
      <section className="rr-product ">
        <ProductGallery />
        <div className="rr-right">
          <ProductInfo />
          <ProductOptions />
          <ShippingInfo />
          <ProductFeatures />
        </div>
      </section>
      <section>
        <ProductReviews />
        <SliderTestimonials />
      </section>
      <section>
        <FaqSection/>
      </section>
    </>
  );
};

export default Products