
const ProductOptions = () => {
  return (
    <div className="rr-options rr-border">
      {/* new4 اسم الكلاس */}
      <div className="rr-options-Left ">
        {/* new4 اسم الكلاس */}
        <h4 className="rr-h4">Material</h4>
        <p className="rr-p" >High-Quality Denim (100% Cotton)</p>
        <h4 className="rr-h4">Color</h4>
        <div className="rr-colors">
          {/* <span className="rr-c rr-black"></span> */}
          <img className="rr-c "src="/assets/img/blackicon.svg"/>
          <span className="rr-c rr-brown"></span>
          <span className="rr-c rr-beige"></span>
        </div>
     </div>
      {/* new5 اسم الكلاس */}
      <div  className="rr-options-Right ">
        {/* new5 اسم الكلاس */}
        <h4 className="rr-h4">Fit</h4>
        <p className="rr-p">Classic Fit</p>
        <h4 className="rr-h4">Sizes</h4>
        <div className="rr-sizes">
          <button className="rr-Smlxl">S</button>
          <button className="rr-active rr-Smlxl">M</button>
          <button className="rr-Smlxl" >L</button>
          <button className="rr-Smlxl" >XL</button>
        </div>
    </div>
  </div>
  );
};

export default ProductOptions;
