class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all.includes(:author, :product)

    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
  end

  def update
    @comment = Commnet.find_by(id: params[:id])

    if current_user.id == @comment.author_id
      if @comment && @comment.update_attributes(comment_params)
        render 'api/comments/show'
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end 
  end

  def delete
    @comment = comment.find(params[:id])
    @comment.destroy

    render 'api/comments/show'
  end

  private
  def comment_params
    self.params.require(:comment).permit(:title, :body, :rating, :buyer_id, :product_id)
  end
end
