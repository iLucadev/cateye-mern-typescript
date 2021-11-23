import app from "./app";
import "./database";
/**
 * establezco el port para el servidor
 */
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
