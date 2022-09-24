//sample to understand mutation and query
//when request send over http://localhost:8000/graphql

//usually in frontend, as user interface, when we want to show some details , details are not about a particular resource., it contains info about multiple resources like in a particular webpage which shows the course details, usually it contain info about the course(like name,price,category...) and also an instructor is associated with a particular course(which is another resource, and for accessing that info, we have to make 2 calls(first call to get course details which contain course details as well as instructor id associated with it, and in 2nd call we have to get that instrcutor detail with help of instrcutor id..so here making 2 call, if backend rest apis followed./))also in case of rest apis, usually some data is we dont need, frontend has no control over the asked data, only frontend can ask particular resource and on backend, the logic need to be implemented for that..
//using graphql -A query language for your API — GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need ..and this is power of graphql..

/*
mutation{
  createCourse(input:{
    name:"HTML,CSS",
    price:200,
    category:BACKEND,
    teachingAssistants:[
      {name:"John",
        email:"john@email.com",
      experienceInYear:2}
    ]
  }){
    id,
    name
  }
}

returned
{
  "data": {
    "createCourse": {
      "id": "_yIKXW6ufs1fdQ46p9Dke",
      "name": "HTML,CSS"
    }
  }
}


*/

/*
query{
	getCourse(id:"_yIKXW6ufs1fdQ46p9Dke"){
    id,
    name,
    price,
    teachingAssistants{name,experienceInYear,email}
  }
}


returned

{
  "data": {
    "getCourse": {
      "id": "_yIKXW6ufs1fdQ46p9Dke",
      "name": "HTML,CSS",
      "price": 200,
      "teachingAssistants": [
        {
          "name": "John",
          "experienceInYear": 2,
          "email": "john@email.com"
        }
      ]
    }
  }
}
*/

/*
query{
  getCourses{
    id,
    name,
    price
  }
}



*/

/*
query{
  getCourses{
    id,name,teachingAssistants{name}
  }
}
returned
{
  "data": {
    "getCourses": [
      {
        "id": "_yIKXW6ufs1fdQ46p9Dke",
        "name": "HTML,CSS",
        "teachingAssistants": [
          {
            "name": "John"
          }
        ]
      },
      {
        "id": "wsuOoAdyj6YW4aKVuKcAQ",
        "name": "NODEJS",
        "teachingAssistants": [
          {
            "name": "Johny"
          }
        ]
      }
    ]
  }
}
*/
