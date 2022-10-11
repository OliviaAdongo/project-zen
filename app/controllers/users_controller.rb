class UsersController < ApplicationController
    skip_before_action :authorize,  only: [:create]


    def create
        user =  User.create!(id: session[:user_id])
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        user = User.find_by(id: params[:id])
        render json: user
    end
    
    private
    def user_params
        params.permit(:username, :password, :password_confirmation  )
    end
end
