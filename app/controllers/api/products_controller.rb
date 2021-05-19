class Api::ProductsController < ApplicationController
  
  def index
    @products = Product.all.includes(:seller)
    
    render 'api/products/index'
  end
  
  def show
    @product = Product.find(params[:id])

    render 'api/products/show'
  end

  private 
  def product_params
    params.require(:product).permit(:name, :description, :price, :discount, :seller_id)
  end
end
