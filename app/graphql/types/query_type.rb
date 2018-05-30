Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  # TODO: remove me
  field :testField, types.String do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      "Hello World!"
    }
  end

  field :userRank, types[Types::UserType] do
    argument :only_pro, types.Boolean
    resolve ->(obj, args, ctx) {
      if args[:only_pro]
        User.where(:title => 'Pro')
      else
        User.all
      end
    }
  end

  # field :user, Types::UserType do
  #   argument :id, !types.ID
  #   resolve ->(obj, args, ctx) {
  #     User.find(args[:id])
  #   }
  # end

  field :books, types[Types::BookType] do
    argument :user_id, !types.ID
    resolve ->(obj, args, ctx) {
      Book.all.where(:user_id => args[:user_id])
    }
  end

  field :comments, types[Types::CommentType] do
    argument :article_id, !types.String

    resolve ->(obj, args, ctx) {
      articles = args[:article_id].split(',')
      Comment.all.where(:article_id => articles).order(updated_at: :desc)
    }
  end

  field :comment, Types::CommentType do
    argument :comment_id, !types.ID

    resolve ->(obj, args, ctx) {
      Comment.find(args[:comment_id])
    }
  end

  field :article, Types::ArticleType do
    argument :article_id, !types.ID

    resolve ->(obj, args, ctx) {
      Article.find(args[:article_id])
    }
  end
end
