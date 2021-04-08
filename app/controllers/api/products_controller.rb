class Api::ProductsController < ApplicationController
  
  before_action :require_logged_in, only: [:create, :update, :delete]

  
  def index
    @products = Product.all.include(:seller)
    
    render 'api/products/index'
  end
  
  def show
    @product = Product.find(params[:id])

    render 'api/products/show'
  end
  
  def create
    @product = Product.new(product_params)
    
    if @product.save
      render 'api/products/show'
    else
      render json: @error.full_messages, status: 422
    end
  end

  private 
  def product_params
    params.require(:product).permit(:name, :type, :price, :price, :discount, :seller_id)
  end
end
