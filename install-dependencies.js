import { execSync } from "child_process"

console.log("Installing required dependencies...")

try {
  // Install clsx
  console.log("\nInstalling clsx...")
  execSync("npm install clsx", { stdio: "inherit" })

  // Install tailwind-merge
  console.log("\nInstalling tailwind-merge...")
  execSync("npm install tailwind-merge", { stdio: "inherit" })

  console.log("\n✅ Dependencies installed successfully!")
  console.log("You can now use the cn utility function in your components.")
} catch (error) {
  console.error("❌ Error installing dependencies:", error.message)
}
