Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createComment,  Mutations::CreateComment.field
end


