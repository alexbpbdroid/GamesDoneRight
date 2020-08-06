class Api::CartItemsController < ApplicationController

  before_action :require_logged_in

  def index
   @current_user = current_user
   @cart_items = @current_user.cart_items
   @cart_games = @current_user.cart_games.with_attached_photos
   
    if @cart_games     
      render :index
    else
      render json: ['No items in shopping cart'], status: 404
    end
  end

  def create
    @cart_item = CartItem.new(
      user_id: current_user.id,
      game_id: cart_item_params[:game_id]
    )

    if @cart_item.save
      render :create
    else
      render json: @cart_item.errors.full_messages, status: 400
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item
      @cart_item.destroy
      render json: 'Removed item from shopping cart'
    else
      render json: ['Cant remove item from shopping cart'], status: 400
    end
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:game_id)
  end

end
