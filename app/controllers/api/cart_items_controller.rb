class Api::CartItemsController < ApplicationController

  before_action: :require_logged_in

  def index
    @cart_games = User.find_by[id: current_user.id].includes(:cart_games)
    if @cart_games
      render json: @cart_games
    else
      render json: ['No items in shopping cart'], status: 404
    end
  end

  def create
    @cart_item = CartItem.new(
      user_id: current_user.id,
      game_id: cart_items_params[:game_id]
    )

    if @cart_item.save
      @cart_game = @cart_item.game
      render json: @cart_game
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

  def cart_items_params
    params.require(:cart_items).permit(:user_id, :game_id)
  end

end
