import fs from 'fs-extra'
import path from 'path'

async function copyAssets() {
  const srcDir = path.resolve('./public/assets') 
  const destDir = path.resolve('./dist') 
  try {
    const exists = await fs.pathExists(srcDir)
    if (!exists) {
      console.warn('Source directory does not exist:', srcDir)
      return
    }
    await fs.ensureDir(destDir)
    await fs.copy(srcDir, destDir)
    console.log('✅ Assets copied from', srcDir, destDir)
  } catch (err) {
    console.error('Error copying assets:', err)
  }
}

copyAssets()
