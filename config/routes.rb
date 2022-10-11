Rails.application.routes.draw do
  resources :movements
  resources :mantras
  # resources :focuseds
  # resources :focus
  resources :reviews
  resources :users
  resources :meditations
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
