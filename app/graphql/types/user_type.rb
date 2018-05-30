Types::UserType = GraphQL::ObjectType.define do
  name "User"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :id, !types.ID
  field :name, !types.String
  field :title, !types.String
  field :avatar, !types.String
end
