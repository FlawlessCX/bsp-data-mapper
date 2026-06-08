import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface TasksProps {
  currentRole: string
}

interface SubTask {
  id: string
  title: string
  status: 'completed' | 'pending'
}

interface WorkflowStep {
  id: string
  title: string
  subtasks: SubTask[]
  status: 'completed' | 'in-progress' | 'pending'
}

const buyerWorkflow: WorkflowStep[] = [
  {
    id: 'pre-dmp',
    title: 'Step 1: Pre-DMP',
    status: 'in-progress',
    subtasks: [
      { id: 'calc', title: 'Complete Borrowing Calculator & Submit Results', status: 'pending' },
      { id: 'alie', title: 'Complete ALIE Form', status: 'pending' },
      { id: 'docs', title: 'Submit Required Financial Documents', status: 'pending' },
      { id: 'decision', title: 'Receive Decision to continue to Digital Marketplace', status: 'pending' },
    ],
  },
  {
    id: 'find-match',
    title: 'Step 2: Find and Match',
    status: 'pending',
    subtasks: [
      { id: 'register', title: 'Register for Digital Marketplace', status: 'pending' },
      { id: 'match', title: 'Matching Process (find and match with a seller)', status: 'pending' },
    ],
  },
  {
    id: 'post-match-a',
    title: 'Step 3: Post-Match A',
    status: 'pending',
    subtasks: [
      { id: 'disclosures', title: 'Review Sellers Disclosures', status: 'pending' },
      { id: 'impact', title: 'Complete Business Impact Assessment', status: 'pending' },
      { id: 'loan', title: 'Complete Loan Application (if required)', status: 'pending' },
      { id: 'submit-a', title: 'Submit', status: 'pending' },
    ],
  },
  {
    id: 'post-match-b',
    title: 'Step 4: Post-Match B',
    status: 'pending',
    subtasks: [
      { id: 'report', title: 'Receive and review report', status: 'pending' },
      { id: 'dd', title: 'Complete Buyer Due Diligence (Update checklist and Submit)', status: 'pending' },
    ],
  },
  {
    id: 'post-match-c',
    title: 'Step 5: Post-Match C',
    status: 'pending',
    subtasks: [
      { id: 'permissions', title: 'Provide Details about permission requirements', status: 'pending' },
    ],
  },
  {
    id: 'post-match-d',
    title: 'Step 6: Post-Match D',
    status: 'pending',
    subtasks: [
      { id: 'transaction', title: 'Sign and Return Transaction Summary', status: 'pending' },
    ],
  },
]

const sellerWorkflow: WorkflowStep[] = [
  {
    id: 'digital-mp',
    title: 'Step 1: Digital Marketplace',
    status: 'in-progress',
    subtasks: [
      { id: 'decision', title: 'Receive a Decision allowing access to Digital Marketplace', status: 'pending' },
      { id: 'register', title: 'Register for Digital Marketplace', status: 'pending' },
      { id: 'match', title: 'Matching Process (Seller and Buyer are matched)', status: 'pending' },
    ],
  },
  {
    id: 'disclosures',
    title: 'Step 2: Practice & Disclosures',
    status: 'pending',
    subtasks: [
      { id: 'checklist', title: 'Complete Seller practice & disclosures checklist', status: 'pending' },
      { id: 'submit', title: 'Submit', status: 'pending' },
    ],
  },
  {
    id: 'valuation',
    title: 'Step 3: Valuation & Due Diligence',
    status: 'pending',
    subtasks: [
      { id: 'report', title: 'Add automated valuation and due diligence report', status: 'pending' },
    ],
  },
  {
    id: 'seller-tasks',
    title: 'Step 4: Seller Tasks',
    status: 'pending',
    subtasks: [
      { id: 'pending', title: 'Awaiting next steps...', status: 'pending' },
    ],
  },
]

const sellerTasks = [
  { id: 1, title: 'Update listing documents', status: 'pending' as const, dueDate: '2026-06-05', priority: 'high' as const },
  { id: 2, title: 'Respond to buyer inquiry', status: 'pending' as const, dueDate: '2026-06-04', priority: 'high' as const },
  { id: 3, title: 'Provide additional financial data', status: 'completed' as const, dueDate: '2026-06-01', priority: 'medium' as const },
  { id: 4, title: 'Sign engagement letter', status: 'pending' as const, dueDate: '2026-06-12', priority: 'medium' as const },
]

const internalBPTasks = [
  { id: 1, title: 'Review buyer qualification - Acme Partners', status: 'pending' as const, dueDate: '2026-06-05', priority: 'high' as const },
  { id: 2, title: 'Approve listing - XYZ Advisory', status: 'pending' as const, dueDate: '2026-06-04', priority: 'high' as const },
  { id: 3, title: 'Send introduction email', status: 'completed' as const, dueDate: '2026-06-01', priority: 'medium' as const },
  { id: 4, title: 'Schedule case kickoff meeting', status: 'pending' as const, dueDate: '2026-06-08', priority: 'medium' as const },
]

function WorkflowStepCard({ step, index }: { step: WorkflowStep; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)

  const completedCount = step.subtasks.filter(t => t.status === 'completed').length
  const totalCount = step.subtasks.length
  const percentage = Math.round((completedCount / totalCount) * 100)

  const getStatusColor = (status: string) => {
    if (status === 'completed') return 'bg-green-100 border-green-300 text-green-900'
    if (status === 'in-progress') return 'bg-blue-100 border-blue-300 text-blue-900'
    return 'bg-gray-100 border-gray-300 text-gray-900'
  }

  const getStatusBadge = (status: string) => {
    if (status === 'completed') return 'Completed'
    if (status === 'in-progress') return 'In Progress'
    return 'Pending'
  }

  return (
    <Card className="mb-4">
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer hover:bg-muted/50 transition"
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                step.status === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-200'
              }`}>
                {step.status === 'completed' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-foreground">{step.title}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        step.status === 'completed' ? 'bg-green-600' : 'bg-blue-600'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {completedCount}/{totalCount}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(step.status)}`}>
                {getStatusBadge(step.status)}
              </span>
              {expanded ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </div>
        </CardContent>
      </div>

      {expanded && (
        <div className="border-t border-border">
          <div className="p-4 space-y-2">
            {step.subtasks.map(subtask => (
              <div key={subtask.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition">
                {subtask.status === 'completed' ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                )}
                <span className={`flex-1 ${subtask.status === 'completed' ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {subtask.title}
                </span>
                {subtask.status === 'pending' && (
                  <Button size="sm" variant="outline">
                    Start
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

export function Tasks({ currentRole }: TasksProps) {
  if (currentRole === 'buying-partner') {
    const completedSteps = buyerWorkflow.filter(s => s.status === 'completed').length
    const totalSteps = buyerWorkflow.length

    return (
      <div>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Buyer Journey</h2>
        <p className="text-muted-foreground mb-8">
          Your complete acquisition path from pre-qualification to transaction completion.
        </p>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Journey Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-blue-600 transition-all"
                    style={{ width: `${(completedSteps / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
              <span className="text-lg font-bold text-primary">
                {completedSteps}/{totalSteps} Steps
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Steps */}
        <div>
          {buyerWorkflow.map((step, index) => (
            <WorkflowStepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    )
  }

  if (currentRole === 'selling-partner') {
    const completedSteps = sellerWorkflow.filter(s => s.status === 'completed').length
    const totalSteps = sellerWorkflow.length

    return (
      <div>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Seller Journey</h2>
        <p className="text-muted-foreground mb-8">
          Your path to list your practice and connect with qualified buyers.
        </p>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Journey Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-green-600 transition-all"
                    style={{ width: `${(completedSteps / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
              <span className="text-lg font-bold text-green-600">
                {completedSteps}/{totalSteps} Steps
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Steps */}
        <div>
          {sellerWorkflow.map((step, index) => (
            <WorkflowStepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    )
  }

  // Seller and Internal BP tasks
  const tasks = currentRole === 'selling-partner' ? sellerTasks : internalBPTasks
  const pendingTasks = tasks.filter(t => t.status === 'pending')
  const completedTasks = tasks.filter(t => t.status === 'completed')

  const getPriorityColor = (priority: string) => {
    if (priority === 'high') return 'text-red-600'
    if (priority === 'medium') return 'text-orange-600'
    return 'text-green-600'
  }

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2 text-foreground">Tasks</h2>
      <p className="text-muted-foreground mb-8">
        Manage your pending and completed tasks.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{pendingTasks.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{completedTasks.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <>
          <h3 className="text-xl font-bold mb-4 text-foreground">Pending</h3>
          <div className="space-y-3 mb-8">
            {pendingTasks.map(task => (
              <Card key={task.id} className="hover:shadow-md transition">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Circle className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{task.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">Due: {task.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </span>
                      <Button size="sm" variant="outline">Start</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <>
          <h3 className="text-xl font-bold mb-4 text-foreground">Completed</h3>
          <div className="space-y-3">
            {completedTasks.map(task => (
              <Card key={task.id} className="opacity-75">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground line-through">{task.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">Completed on {task.dueDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
