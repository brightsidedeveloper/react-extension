import { execSync } from 'child_process'
import fsExtra from 'fs-extra' // Import fs-extra as default import
import { dirname, join } from 'path'
import chalk from 'chalk'
import figlet from 'figlet'
import { fileURLToPath } from 'url'

// Create a function for flashy logging
const logFlashy = (message: string) => {
  console.log(chalk.bgMagenta.bold(message))
}

const logSuccess = (message: string) => {
  console.log(chalk.green.bold(message))
}

const logHeader = () => {
  console.log(chalk.redBright.bold(figlet.textSync('BrightSide Developer', { font: 'Sub-Zero', horizontalLayout: 'controlled smushing' })))
  console.log(chalk.yellow.bold('Extreme Extensioner 3000'))
  console.log(chalk.white('---------------------------------------------'))
}

// Print the header
logHeader()

const __dirname = dirname(fileURLToPath(import.meta.url))

// Define the paths
const popupFolder = join(__dirname, 'popup')
const injectionFolder = join(__dirname, 'injection')
const distPopupFolder = join(popupFolder, 'dist')
const extensionFolder = join(__dirname, 'extension')
const manifestFilePath = join(__dirname, 'manifest.json')

// Step 1: Clear all files in the 'extension' folder
logFlashy('Clearing all files in the extension folder...')
fsExtra.emptyDirSync(extensionFolder)

// Step 2: Copy 'manifest.json' from the root to 'extension/manifest.json'
logFlashy('Copying manifest.json to the extension folder...')
fsExtra.copySync(manifestFilePath, join(extensionFolder, 'manifest.json'), { overwrite: true })

// Step 3: Run 'npm run build' in the 'popup' folder
logFlashy('Running npm run build in the popup folder...')
execSync('npm run build', { cwd: popupFolder, stdio: 'inherit' })

// Step 4: Copy files from 'popup/dist' to the 'extension' folder
logFlashy('Copying files from popup/dist to the extension folder...')
fsExtra.copySync(distPopupFolder, extensionFolder, { overwrite: true })

// Step 5: Run 'npm run build' in the 'injection' folder
logFlashy('Running npm run build in the injection folder...')
execSync('npm run build', { cwd: injectionFolder, stdio: 'inherit' })

// Step 6: Copy the built 'injection.js' to the 'extension' folder
const injectionJsPath = join(injectionFolder, 'injection.js')
const targetInjectionJsPath = join(extensionFolder, 'injection.js')
logFlashy('Copying injection.js to the extension folder...')
fsExtra.copySync(injectionJsPath, targetInjectionJsPath, { overwrite: true })

// Final Success Message
logSuccess('WOOOHOOOO! Just load the extension folder into chrome://extensions! 🎉🚀')
console.log(chalk.blueBright.bold(figlet.textSync('To  Ez', { font: '3D-ASCII', horizontalLayout: 'controlled smushing' })))
