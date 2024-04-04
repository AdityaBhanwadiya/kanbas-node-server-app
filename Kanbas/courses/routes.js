import Database from "../Database/index.js";
export default function CourseRoutes(app) {
  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses
      .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses
      .filter((c) => c._id !== id);
    res.sendStatus(204);
  });


  app.post("/api/courses", (req, res) => {
    const course = {
      _id: new Date().getTime().toString(),
      name: 'New Course',
      secondary: 'New Course Details Displayed Here',
      ternary: 'New Course Details Displayed Here',
      number: 'New Number',
      startDate: '2023-09-10',
      endDate: '2023-12-15',
      image: 'c7.jpg',
      ...req.body
    };
    Database.courses.push(course);
    res.send(course);
  })


  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
}