class Api::CartsController < ApplicationController

  before_action :require_logged_in

  def create
    @cart = Cart.new(cart_params)
    @cart.buyer_id = params[:buyer_id]
    @cart.product_id = params[:product_id]

    if @cart.save
      render "api/users/show"
    else
      render json: @cart.errors.full_messages, status: 422
  end

  def update
    @cart = Cart.find_by(id: params[:id])
    
    if current_user.id == @cart.buyer_id
      if @cart && @cart.update_attributes(cart_params)
        render "api/users/show"
      else
        render json: @event.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @cart = Cart.find(params[:id])
    @cart.destroy

    render "api/user/show"
  end

  private
  def cart_params
    self.params.require(:cart).permit(:quantity)
  end
end
