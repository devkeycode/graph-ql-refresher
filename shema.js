const { buildSchema } = require("graphql");
//buildSchema- A helper function to build a GraphQLSchema directly from a source document.

const schema = buildSchema(`
  type Course{
    id:ID
    name:String
    price:Int
    category:Category
    language:String      
    teachingAssistants:[TeachingAssistant]
  }

  type TeachingAssistant {
    name:String
    experienceInYear:Int
    email:String
  }

  enum Category{
    FRONTEND
    BACKEND
    FULLSTACK
  }

  input CourseInput{
    id:ID
    name:String!
    price:Int!
    category:Category
    language:String     
    teachingAssistants:[teachingAssistantInput]!
  }

  input teachingAssistantInput {
    name:String!
    experienceInYear:Int
    email:String!
  }

  
  type Mutation{
    createCourse(input:CourseInput): Course
  }

  type Query {
    getCourses:[Course]
    getCourse(id:ID!): Course  
  }
`);

module.exports = schema;
