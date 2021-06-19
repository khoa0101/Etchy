import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ProductIndexItem from '../products/product_index_item';

class Splash extends React.Component{
  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.requestProducts();
  }

  render(){
    const products = Object.values(this.props.products);
    return(
      <div className="splash-page">
        <GreetingContainer />
        <div className="new-products">
        <h1 className="new-products-header">New from shops you might like</h1>
          <ul className="new-products-list">
            {products.map(product =>
              <ProductIndexItem 
              key={`product-${product.id}`}
              product={product}
              />
            )}
          </ul>
        </div>
        <div className="about-splash">
          <h1>What is Etchy?</h1>
          <ul>
            <li>
              <h2>A one-of-a-kind community</h2>
              <p>Etchy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</p>
            </li>
            <li>
              <h2>Support independent creators</h2>
              <p>There's no Etchy's warehouse - just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
            </li>
            <li>
              <h2>Peace of mind</h2>
              <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
            </li>
          </ul>
          <div className="contact-git">
            <h2>Have a question? Well, we've got some answers.</h2>
            <form action="https://github.com/khoa0101/Etchy" target="_blank">
              <input type="submit" value="Go to Github" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;