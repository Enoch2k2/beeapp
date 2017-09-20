class Api::V1::UsersController < ApplicationController

  def create
    binding.pry
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      @user.to_json
    end
  end

  def show
    @user = User.find(params[:id])
    render json: {user: @user}
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
