class Api::GamesController < ApplicationController

  def index
    @games = Game.all.with_attached_photos
    render :index
  end

  def show
    @game = Game.with_attached_photos.find_by(id: params[:id])
    if @game
      render :show
    else
      render json: ['Game not found'], status: 404
    end
  end

  private

  def game_params
    params.require(:game).permit(:title, :price, :description, :release_date, :developer, :publisher, :esrb_rating, :works_on, :video)
  end
end
