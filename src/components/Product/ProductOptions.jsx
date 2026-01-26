
const ProductOptions = () => {
  return (
    <div className="rr-options">

      <div>
        <h4 className="rr-h4">Material</h4>
        <p className="rr-p" >High-Quality Denim (100% Cotton)</p>
        <h4 className="rr-h4">Color</h4>
        <div className="rr-colors">
          <span className="rr-c rr-black"></span>
          <span className="rr-c rr-brown"></span>
          <span className="rr-c rr-beige"></span>
        </div>
     </div>

      <div>
        <h4 className="rr-h4">Fit</h4>
        <p className="rr-p">Classic Fit</p>
        <h4 className="rr-h4">Sizes</h4>
        <div className="rr-sizes">
          <button>S</button>
          <button className="rr-active">M</button>
          <button>L</button>
          <button>XL</button>
        </div>
    </div>
  </div>
  );
};

export default ProductOptions;
