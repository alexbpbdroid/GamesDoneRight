class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    # debugger
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: ['Failed to create review'], status: 400
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.destroy
    end
    render :show
  end

  private
  
  def review_params
    params.require(:review).permit(:body, :game_id)
  end
end