Rails.application.routes.draw do
  get 'reviews/create'
  root to: "lists#index"
  resources :lists, only: [:index, :show, :new, :create, :destroy] do
    resources :bookmarks, only: [:create]
    resources :reviews, only: [:create]
  end
  resources :bookmarks, only: [:destroy]
end
