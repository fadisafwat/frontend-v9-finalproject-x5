import ProductGallery from "../components/Product/ProductGallery";
import ProductInfo from "../components/Product/ProductInfo";
import ProductOptions from "../components/Product/ProductOptions";
import ShippingInfo from "../components/Product/ShippingInfo";
import ProductFeatures from "../components/Product/ProductFeatures";
import "../components/Product/product.css";
import ProductFaq from "../components/ProductFaq/ProductFaq";
import SliderTestimonials from "../components/SliderTestimonials/SliderTestimonials";
import ProductReviews from "../components/ProductReviews/ProductReviews";


const Products = () => {
  return (
    <>
      <section id="product-info" className="fs-productMargin rr-product">
        <ProductGallery />
        <div className="rr-right">
          <ProductInfo />
          <ProductOptions />
          <ShippingInfo />
          <ProductFeatures />
        </div>
      </section>
      <section id="product-reviews" className="fs-productMargin">
        <ProductReviews />
        <SliderTestimonials />
      </section>
      <section id="product-faq" className="fs-productMargin">
        <ProductFaq />
      </section>
    </>
  );
};

export default Products