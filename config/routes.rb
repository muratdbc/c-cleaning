Rails.application.routes.draw do
  devise_for :users ,:controllers => { :sessions => "user/sessions" }
  root to: 'visitors#index'
  resources :users
  resources :rental

  resources :users do
    resources :jobs
  end

  get '/jobs-sync', to: 'jobsync#sync'
  get 'customer/cleanings', to: 'visitors#customer'
  get 'customer/cleanings/new', to: 'visitors#customer'
  get 'customer/cleanings/:id', to: 'visitors#customer'
end
