class Api::GamesController < ApplicationController

  def show
    @game = Game.with_attached_photos.find(params[:id])
    render "api/games/show"
  end

  def index
    @games = {}
    Game.with_attached_photos.all.each do |game|
      
    end
  end



  private
  def game_params
    params.require(:game).permit(:id)
  end
 
end
