class Api::GamesController < ApplicationController

  def index
    @games = Game.all
    render :index
  end

  def show
    @game = Game.find(params[:id])
  end

  private

  def game_params
    params.require(:game).permit(:title, :price, :description, :release_date, :developer, :publisher, :esrb_rating)
  end
end
