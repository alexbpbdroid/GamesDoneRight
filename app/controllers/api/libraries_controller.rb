class Api::LibrariesController < ApplicationController

  def index
    @libraries = Library.all 
    render :index
  end

  def show
    @library = Library.find(params[:id])
  end

  def create
    @library = Library.new(library_params)
    @library.user_id = current_user.id
    if @library.save
      render :show
    else
      render json: @library.errors.full_messages, status: 422
    end
  end

  def update
    @library = Library.find(params[:id])
    if @library.update(library_params)
      render :show
    else
      render json @library.errors.full_messages, status: 400
    end
  end

  def destroy
    @library = Library.find(params[:id])
    if @library
      @library.destroy
    end
    render :show
  end

  private

  def library_params
    params.require(:library).permit(:game_id, :saved)
  end

end
