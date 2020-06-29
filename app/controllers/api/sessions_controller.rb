class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if !@user
      render json: ["Invalid username/password combination"], status: 401
    else
      login(@user)
      render "api/users/show"
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: @user.error.full_messages, status: 404
    end
  end
end
