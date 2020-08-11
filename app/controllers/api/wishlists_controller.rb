class Api::WishlistsController < ApplicationController
  def index
    @wishlists = Wishlist.all
    render :index
  end

  def show
    @wishlist = Wishlist.find(params[:id])
  end

  def create
    @wishlist = Wishlist.new(wishlist_params)
    @wishlist.user_id = current_user.id 
    if @wishlist.save
      render :show
    else
      render json: @wishlist.errors.full_messages, status: 422
    end
  end

  def update
    @wishlist = Wishlist.find(params[:id])
    if @wishlist.update(wishlist_params)
      render :show
    else
      render json @wishlist.errors.full_messages, status: 400
    end
  end

  def destroy
    @wishlist = Wishlist.find(params[:id])
    if @wishlist
      @wishlist.destroy
    end
    render :show
  end

  private

  def wishlist_params
    params.require(:wishlist).permit(:game_id, :saved)
  end

end
