import app from "./app.js";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config("./.env");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    colors.bgGreen.black(`Server is running on http://localhost:${PORT}`)
  );
});
