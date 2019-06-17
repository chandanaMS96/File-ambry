class DocsController < ApplicationController
  def new
    @doc = Doc.new
  end

  def create
    @doc = Doc.new(doc_params)
    if @doc.save
      redirect_to @doc
    else
      render 'new'
    end
  end

  def edit
  end

  def update
  end

  def show
  end 

private

def doc_params
  params.require(:doc).permit(:title, :content)
  end



end
