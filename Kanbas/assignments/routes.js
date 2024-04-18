import db from "../Database/index.js";
function  AssignmentRoutes(app) {
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignmentsType = db.assignments.find((a) => a.type === 'Assignments');
        const assignments = assignmentsType.value
        .filter((a) => a.course === cid);
        res.send(assignments);
    });
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
        ...req.body,
        course: cid
        };
        db.assignments.find((a) => a.type === 'Assignments').value.push(newAssignment);
        res.send(newAssignment);
    });

    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.find((a) => a.type === 'Assignments').value.findIndex(
          (a) => a._id === aid);
        db.assignments.find((a) => a.type === 'Assignments').value[assignmentIndex] = {
          ...db.assignments.find((a) => a.type === 'Assignments').value[assignmentIndex],
          ...req.body
        };
        res.sendStatus(204);
      });

    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments.find((a) => a.type === 'Assignments').value = db.assignments.find((a) => a.type === 'Assignments').value.filter((a) => a._id !== aid);
        res.sendStatus(200);
        });
}

export default AssignmentRoutes;