import * as dao from "./dao.js";
let currentUser = null;
export default function UserRoutes(app) {
  const createUser = async (req, res) => { };
  const deleteUser = async (req, res) => { };
  const findAllUsers = async (req, res) => { };
  const findUserById = async (req, res) => { };
  const signup = async (req, res) => { };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);

  };
  const signout = (req, res) => { };
  const profile = async (req, res) => { 
    const profile = async (req, res) => {
      res.json(currentUser);
    };
  
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    currentUser = await dao.findUserById(userId);
    res.json(status);
  };

  
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/profile", profile);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}

