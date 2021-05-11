class Api::CartsController < ApplicationController

  before_action :require_logged_in

  def create
    @cart = Cart.new(cart_params)
    
    if @cart.save
      render "api/carts/show"
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def update
    @cart = Cart.find_by(id: params[:id])
    
    if current_user.id == @cart.buyer_id
      if @cart && @cart.update_attributes(cart_params)
        render "api/carts/show"
      else
        render json: @event.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @cart = Cart.find(params[:id])
    @cart.destroy

    render "api/carts/show"
  end

  private
  def cart_params
    self.params.require(:cart).permit(:quantity, :buyer_id, :product_id)
  end

end
