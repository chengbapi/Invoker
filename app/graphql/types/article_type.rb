Types::ArticleType = GraphQL::ObjectType.define do
  name "Article"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :id, !types.ID
  field :user, !Types::UserType
  field :title, !types.String
  field :text, !types.String
  field :updated_at, !types.String
end
