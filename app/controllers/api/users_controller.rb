class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["Invalid username/password combination"], status: 401;
        end
    end


    def destroy
        @user = current_user

        if @user
            logout
            render 'api/users/show'
        else
            render json: ['Nobody signed in']
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end



end
