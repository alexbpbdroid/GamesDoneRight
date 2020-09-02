class Api::HistoriesController < ApplicationController

  def index
    @histories = History.all 
    render :index
  end

  def show
    @history = History.find(params[:id])
  end

  def create
    @history = History.new(history_params)
    @history.user_id = current_user.id
    if @history.save
      render :show
    else
      render json: @library.errors.full_messages, status: 422
    end
  end

  def update
    @history = History.find(params[:id])
    if @history.update(history_params)
      render :show
    else
      render json @history.errors.full_messages, status: 400
    end
  end

  def destroy
    @history = History.find(params[:id])
    if @history
      @history.destroy
    end
    render :show
  end

  private

  def history_params
    params.require(:history).permit(:game_id, :saved)
  end

end
