class DocumentsController < ApplicationController
  def main
  end
  def index
    render :json => Document.all
  end

  def show
    render :json => Document.find(params[:id])
  end

  def create
    document = Document.new
    document.title = params[:title]
    document.body = params[:body]
    document.save
    render :json => document
  end

  def update
    document = Document.find(params[:id])
    document.title = params[:title]
    document.body = params[:body]
    document.save
    render :json => document
  end
end
