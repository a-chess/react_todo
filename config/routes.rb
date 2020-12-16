Rails.application.routes.draw do
  get '/app', to: 'root#index'
  get '/app/*path', to: 'root#index'

  namespace :api do
  end
end
