import fs from "fs";
import process from "node:process";

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Read the .env file
fs.readFile(".env", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading .env file:", err);
    process.exit(1);
  }

  // Replace the VITE_APP_BUILD_DATE variable with today's date
  const updatedEnv = data.replace(/VITE_APP_BUILD_DATE=".*"/, `VITE_APP_BUILD_DATE="${today}"`);

  // Write the updated content back to the .env file
  fs.writeFile(".env", updatedEnv, "utf8", (err) => {
    if (err) {
      console.error("Error writing .env file:", err);
      process.exit(1);
    }
    console.log(".env file updated successfully");
  });
});
