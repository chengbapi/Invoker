Types::BookType = GraphQL::ObjectType.define do
  name "Book"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :id, !types.ID
  field :name, !types.String
end
