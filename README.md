# README

![Capture](https://user-images.githubusercontent.com/70730501/114972517-7e096e00-9e33-11eb-94eb-660e26337825.PNG)

[Etchy Live!](https://etchy-etsy.herokuapp.com/#/)

## Overview
Etchy is a clone of Etsy.com. Simular to Etsy, Etchy is an online shopping website that users can checkout new and creative items for sale. Unlike the original website where only products from independent creators are available, this website allows all artistic and creative products to be listed here, independent or otherwise.  

## Languagues and Frameworks

* Ruby on Rails (Ruby): Backend
* PostgeSQL: Database 
* AWS: Image Storage
* React-Redux (JavaScript): Frontend

## Features
### User Auth
* Users can create accounts, sign in with existing accounts, and sign out. Demo login available.
![User demo](https://media.giphy.com/media/zTwvIklAmGZJkGtRJh/giphy.gif) 
### Products
* Users can browse through products and checkout listed products in greater details. 
![Product demo](https://media.giphy.com/media/21lQjkeG4fHBF3Z3vy/giphy.gif)
### Shopping Cart
* Users can add products to the shopping cart
* Users can purchase products from the shopping cart
* Users can view products added to the shopping cart from previous visits that have not been purchase
![Cart demo](https://media.giphy.com/media/cbo365S9p95UFqsnSK/giphy.gif)
### Reviews
* Logged in user can write reviews/comments on products
* Users can view reviews/comments on products
* Users can edit reviews/comments
### Search 
* Users search for products.
## Future Plans
* Category
## Code Snippet
````
<div className="product-show">
  <div className="image-info">
    <img className="thumbnail" src={imageUrl}/>
    <img className="display-image"src={imageUrl}/>
  </div>
  <div className="product-info">
    <i className="product-seller">{username}</i>
    <br/>
    <i className="product-sales">{sales.toLocaleString()} sales</i>
    <h1 className="product-name">{name}</h1>
    {discountInfo()}
    <label>Quantity<br/>
      <select>
        {quanArr(quantity).map((option) => 
          <option key={`opt-${option}`}>{option}</option>
        )}
      </select>
    </label>
    <h1 className="des-header">Description</h1>
    <p>{description}</p>
  </div>

</div>
````
