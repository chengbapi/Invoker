Mutations::CreateComment = GraphQL::Relay::Mutation.define do
  name "CreateComment"
  # TODO: define return fields
  # return_field :post, Types::PostType

  return_field :comment, Types::CommentType

  # TODO: define arguments
  # input_field :name, !types.String
  input_field :user_id, !types.ID
  input_field :article_id, !types.ID
  input_field :body, !types.String

  resolve ->(obj, args, ctx) {
    a = Article.find(args[:article_id])

    if a.min_comment_length.present? and args[:body].length < a.min_comment_length
      GraphQL::ExecutionError.new("body length < #{a.min_comment_length}")
    else
      c = Comment.create(
          :article_id => args[:article_id],
          :user_id => args[:user_id],
          :body => args[:body],
      )

      response = {
          comment: c
      }
    end


  }
end
