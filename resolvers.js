const { nanoid } = require("nanoid");

const courses = []; //global object //replicating db
//will consist individual course object {id,...other course detail}

class Course {
  constructor(id, { name, price, category, language, teachingAssistants }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.language = language;
    this.teachingAssistants = teachingAssistants;
  }
}

const resolvers = {
  getCourses: () => {
    return courses;
  },

  getCourse: ({ id }) => {
    //find repsective course form courses
    const course = courses.find((course) => course.id == id);

    return new Course(id, course);
  },
  createCourse: ({ input }) => {
    const id = nanoid();
    courses.push({ id, ...input });
    return new Course(id, input);
  },
};

module.exports = resolvers;
