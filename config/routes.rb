Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'
  resources :docs
  

  authenticated :user do
    root "docs#index" ,as: "authenticated_root" 
    
  end
  root 'welcome#index'


controller :docs do
get '/textnote' => :textnote
 get '/remainder' => :remainder
get '/audio' => :audio
get '/attachment'  => :attachment
get '/handwriting' => :handwriting
get '/camera' => :camera
post '/save_image' => :save_image
get '/get_image' => :get_image
get '/my_attachments_data' => :my_attachments_data
get '/my_attachments' => :my_attachments
end


  
end
