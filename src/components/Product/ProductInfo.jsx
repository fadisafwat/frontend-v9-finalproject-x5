
const ProductInfo = () => {
  return (
    <div className="rr-section ">
      <div className="rr-info">
        <span className="rr-tag">Men’s Casual Outerwear<button class="yellowbtn">12 Left!</button></span>
                <div className="h1withprice">
                  <h1 className="rr-h1 rr-h1mobile">Urban Explorer Denim Jacket </h1>
                  <p className="rr-price1">$69.99</p> 
                </div>
      </div>
        <div className="rr-buttons">
          <button className="rr-buy rr-action"><img src="./assets/img/Buypro.svg"></img>Buy Now</button>
          <button className="rr-cart rr-action"><img src="./assets/img/Iconpro.svg"></img>Add to cart</button>
        </div>
        
        {/* <p className="rr-price">$69.99</p> */}
        {/* <div className="rr-buttons">
          <button className="rr-buy rr-action1"><img src="/assets/img/Buypro.svg"></img>Buy Now</button>
          <button className="rr-cart rr-action1"><img src="/assets/img/Iconpro.svg"></img>Add to cart</button>
        </div> */}
     
      </div>
      
  );
};

export default ProductInfo;
