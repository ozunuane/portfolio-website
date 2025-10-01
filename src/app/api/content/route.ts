import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const contentFilePath = path.join(process.cwd(), 'src', 'data', 'content.json')

export async function GET() {
  try {
    const fileContent = await fs.readFile(contentFilePath, 'utf8')
    const content = JSON.parse(fileContent)
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error reading content file:', error)
    return NextResponse.json(
      { error: 'Failed to read content file' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const newContent = await request.json()
    
    // Validate JSON structure (basic validation)
    if (!newContent.personal || !newContent.social) {
      return NextResponse.json(
        { error: 'Invalid content structure' },
        { status: 400 }
      )
    }

    // Write to file
    await fs.writeFile(contentFilePath, JSON.stringify(newContent, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error writing content file:', error)
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    )
  }
}
