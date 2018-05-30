Types::CommentType = GraphQL::ObjectType.define do
  name "Comment"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :id, !types.ID
  field :user, !Types::UserType
  field :body, !types.String
  field :updated_at, !types.String
end
