import * as dao from "./dao.js";
function ModuleRoutes(app) {
    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
        });    

    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findAllModulesForCourse(cid);
        res.send(modules);
    });

    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const newModule = await dao.createModule(cid, req.body);
        res.send(newModule);
    });

    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const module = await dao.updateModule(mid, req.body);
        res.json(module);
      });

}
export default ModuleRoutes;