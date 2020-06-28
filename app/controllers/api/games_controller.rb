class Api::GamesController < ApplicationController

  def show
    @game = Game.find(params[:id])
  end

  # def index
  #   @games = {}
  #   Game.with_attached_photos.all.each do |game|
      
  #   end
  # end

  private

  def game_params
    params.require(:game).permit(:title, :price, :description, :release_date, :developer, :publisher, :esrb_rating)
  end
end
