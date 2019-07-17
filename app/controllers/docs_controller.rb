class DocsController < ApplicationController

  protect_from_forgery except: [:save_image]
  before_action :find_doc, only: [:edit,:update,:destroy,:show]


  def index
    @docs = Doc.where(user_id: current_user).paginate(page: params[:page], per_page: 4)
  end

  def new
    @doc = current_user.docs.build
  end

  def create
    @doc = current_user.docs.build(doc_params)
    if @doc.save
      redirect_to @doc
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @doc.update(doc_params)
      redirect_to @doc
    else
      render 'edit'
    end
  end

  def destroy
    if @doc.destroy
      redirect_to action: "index"
    else
      render 'show'
    end
  end

  def show
  end

  def textnote
  end

  def remainder
  end
  
  def audio
  end

  def save_image
    unless params[:file].nil? && params[:name].nil?
      file =  params[:file]
      same_images =  current_user.images.select { |img| img.blob[:filename] == params[:name] }
      if same_images.blank?
       image_uploaded = current_user.images.attach(io: File.open(file.path,'r'), filename: params[:name] )
     else
      render :json=> {result: "image already exists"}
    end
  end
end


def get_image
  filename = request.headers['file-name']
  polymorphic_url = []
  unless  current_user.images.nil?
    images =  current_user.images
    images.each do |img|
      if img.blob[:filename] == filename
        polymorphic_url << polymorphic_url(img)
      end
    end
  end
  render :json => {results: polymorphic_url}
end

def my_attachments_data
  polymorphic_url = []
  current_user.images.each do |img|
    data = {
      url: polymorphic_url(img),
      name: img.blob[:filename],
      extension: File.extname(img.blob[:filename])
    }
    polymorphic_url << data 
  end
   render :json => {results: polymorphic_url}
end


def attachment
 
end

def handwriting
end

def camera
end




private

def doc_params
  params.require(:doc).permit(:title, :content, images:[])
end

def find_doc
  @doc = Doc.find(params[:id])
end

end
