Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'
  resources :docs
  

  authenticated :user do
    root "docs#index" ,as: "authenticated_root" 
    
  end
  root 'welcome#index'


get '/textnote', to: 'docs#textnote'

get '/remainder', to: 'docs#remainder'

get '/audio', to: 'docs#audio'

get '/attachment', to: 'docs#attachment'

get '/handwriting', to: 'docs#handwriting'

get '/camera', to: 'docs#camera'
  
end
