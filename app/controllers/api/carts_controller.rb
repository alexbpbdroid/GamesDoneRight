class Api::CartsController < ApplicationController
  def index
    @carts = Carts.all 
    render :index
  end

  def show
    @cart = Cart.find(params[:id])
  end

  def create
    @cart = Cart.new(cart_params)
    @cart.user_id = current_user.id
    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def update
    @cart = Cart.find(params[:id])
    if @cart.update(cart_params)
      render :show
    else
      render json @cart.errors.full_messages, status: 400
    end
  end

  def destroy
    @cart = Cart.find(params[:id])
    if @cart
      @cart.destroy
    end
    render :show
  end

  private

  def cart_params
    params.require(:cart).permit(:game_id, :saved)
  end

end
