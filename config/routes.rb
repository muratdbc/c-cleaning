Rails.application.routes.draw do
  devise_for :users ,:controllers => { :sessions => "user/sessions" }
  root to: 'visitors#index'
  resources :users
  resources :rental
  resource :photos
  get 'jobs' ,to: 'jobs#index'
  resources :users do
    resources :jobs
  end

  get '/jobs-sync', to: 'jobsync#sync'
  get 'customer/cleanings', to: 'visitors#customer'
  get 'customer/cleanings/new', to: 'visitors#customer'
  get 'customer/cleanings/:id', to: 'visitors#customer'
  get 'provider/cleanings', to: 'visitors#customer'
  get 'provider/cleanings/:id', to: 'visitors#customer'
  post 'provider/cleanings/:id/photos', to: 'photos#create'
  delete 'provider/cleanings/:id/photos/:id', to: 'photos#destroy'
  post  'presigned', to: 'jobs#presigned'
end
