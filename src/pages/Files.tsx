import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { FileText } from 'lucide-react'

interface FilesProps {
  currentRole: string
}

interface File {
  id: number
  name: string
  type: string
  size: string
  uploadedDate: string
  category: string
}

const mockFiles: Record<string, File[]> = {
  'buying-partner': [
    { id: 1, name: 'Qualification Documents.pdf', type: 'PDF', size: '2.4 MB', uploadedDate: '2026-06-01', category: 'Legal' },
    { id: 2, name: 'Financial Statements 2025.xlsx', type: 'Excel', size: '854 KB', uploadedDate: '2026-05-30', category: 'Financial' },
    { id: 3, name: 'Board Minutes Q2 2025.docx', type: 'Word', size: '1.2 MB', uploadedDate: '2026-05-28', category: 'Corporate' },
    { id: 4, name: 'Tax Returns 2024 2025.zip', type: 'ZIP', size: '5.1 MB', uploadedDate: '2026-05-25', category: 'Tax' },
    { id: 5, name: 'Business Plan 2026.pdf', type: 'PDF', size: '3.2 MB', uploadedDate: '2026-05-20', category: 'Strategic' },
  ],
  'selling-partner': [
    { id: 1, name: 'Client Book Summary.pdf', type: 'PDF', size: '1.8 MB', uploadedDate: '2026-06-03', category: 'Marketing' },
    { id: 2, name: 'Financial Statements 2024.xlsx', type: 'Excel', size: '2.1 MB', uploadedDate: '2026-06-02', category: 'Financial' },
    { id: 3, name: 'Client Retention Analysis.docx', type: 'Word', size: '945 KB', uploadedDate: '2026-06-01', category: 'Analytics' },
    { id: 4, name: 'Revenue By Asset Class.xlsx', type: 'Excel', size: '567 KB', uploadedDate: '2026-05-31', category: 'Financial' },
    { id: 5, name: 'Staff Credentials.pdf', type: 'PDF', size: '3.4 MB', uploadedDate: '2026-05-28', category: 'HR' },
  ],
  'internal': [
    { id: 1, name: 'Case 2024-001 Documentation.zip', type: 'ZIP', size: '12.5 MB', uploadedDate: '2026-06-03', category: 'Case Management' },
    { id: 2, name: 'Buyer Qualification Template.docx', type: 'Word', size: '456 KB', uploadedDate: '2026-06-02', category: 'Templates' },
    { id: 3, name: 'Seller Onboarding Checklist.xlsx', type: 'Excel', size: '234 KB', uploadedDate: '2026-06-01', category: 'Processes' },
    { id: 4, name: 'Market Analysis Report.pdf', type: 'PDF', size: '4.7 MB', uploadedDate: '2026-05-30', category: 'Research' },
    { id: 5, name: 'Engagement Letter Template.docx', type: 'Word', size: '789 KB', uploadedDate: '2026-05-28', category: 'Templates' },
  ],
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Legal': 'bg-blue-500/10 text-blue-700',
    'Financial': 'bg-green-500/10 text-green-700',
    'Corporate': 'bg-purple-500/10 text-purple-700',
    'Tax': 'bg-orange-500/10 text-orange-700',
    'Strategic': 'bg-pink-500/10 text-pink-700',
    'Marketing': 'bg-cyan-500/10 text-cyan-700',
    'Analytics': 'bg-indigo-500/10 text-indigo-700',
    'HR': 'bg-amber-500/10 text-amber-700',
    'Case Management': 'bg-red-500/10 text-red-700',
    'Templates': 'bg-violet-500/10 text-violet-700',
    'Processes': 'bg-lime-500/10 text-lime-700',
    'Research': 'bg-sky-500/10 text-sky-700',
  }
  return colors[category] || 'bg-gray-500/10 text-gray-700'
}

export function Files({ currentRole }: FilesProps) {
  const files = mockFiles[currentRole as keyof typeof mockFiles] || []

  const categories = Array.from(new Set(files.map(f => f.category)))

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2 text-foreground">Files</h2>
      <p className="text-muted-foreground mb-8">
        Access your documents and files organized by category.
      </p>

      {/* Upload Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition cursor-pointer">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Upload Files</h3>
            <p className="text-sm text-muted-foreground mb-4">Drag and drop files here or click to browse</p>
            <Button variant="outline" size="sm">Select Files</Button>
          </div>
        </CardContent>
      </Card>

      {/* Files by Category */}
      {categories.map(category => {
        const categoryFiles = files.filter(f => f.category === category)
        return (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">{category}</h3>
            <div className="space-y-3">
              {categoryFiles.map(file => (
                <Card key={file.id} className="hover:shadow-md transition">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground truncate">{file.name}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(category)}`}>
                              {file.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{file.size}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{file.uploadedDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button variant="outline" size="sm">Download</Button>
                        <Button variant="outline" size="sm">Share</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
