Rails.application.routes.draw do
  root to: 'pages#index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'cities/search', to: 'cities#search'
  post 'cities/weather', to: 'cities#weather' 
   

  match '*path', to: 'pages#index', via: :all
end
 