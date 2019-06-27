class DocsController < ApplicationController
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

  def attachment
  end

  def handwriting
  end

  def camera
  end

  private

  def doc_params
    params.require(:doc).permit(:title, :content)
  end

  def find_doc
    @doc = Doc.find(params[:id])
  end

end
