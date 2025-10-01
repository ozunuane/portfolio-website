'use client'

import { useState, useEffect } from 'react'
import { Save, Eye, Download, Upload } from 'lucide-react'

export default function AdminPage() {
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Load current content
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(JSON.stringify(data, null, 2))
      })
      .catch(err => {
        console.error('Failed to load content:', err)
        setMessage('Failed to load content')
      })
  }, [])

  const handleSave = async () => {
    setIsLoading(true)
    setMessage('')

    try {
      const parsedContent = JSON.parse(content)
      
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedContent),
      })

      if (response.ok) {
        setMessage('Content saved successfully!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        throw new Error('Failed to save content')
      }
    } catch (error) {
      setMessage('Error: Invalid JSON or save failed')
      console.error('Save error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePreview = () => {
    window.open('/', '_blank')
  }

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'content.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        setContent(text)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
            <p className="text-gray-600 mt-1">
              Edit your website content easily. Changes will be reflected immediately.
            </p>
          </div>

          <div className="p-6">
            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Save className="h-4 w-4" />
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>

              <button
                onClick={handlePreview}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                <Eye className="h-4 w-4" />
                Preview Website
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Backup
              </button>

              <label className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors cursor-pointer">
                <Upload className="h-4 w-4" />
                Upload File
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Status message */}
            {message && (
              <div className={`mb-4 p-3 rounded-md ${
                message.includes('Error') || message.includes('Failed')
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : 'bg-green-50 text-green-800 border border-green-200'
              }`}>
                {message}
              </div>
            )}

            {/* JSON Editor */}
            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Website Content (JSON)
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-96 p-4 border border-gray-300 rounded-md font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Loading content..."
              />
            </div>

            {/* Help text */}
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h3 className="text-sm font-medium text-blue-900 mb-2">Quick Tips:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Always validate your JSON before saving</li>
                <li>• Make a backup before making major changes</li>
                <li>• Use the preview button to see changes immediately</li>
                <li>• Keep the structure consistent with the original format</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
