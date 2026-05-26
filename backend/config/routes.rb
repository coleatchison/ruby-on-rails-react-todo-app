Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [:index, :show, :create, :update, :destroy]
  end
end
