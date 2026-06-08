import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { CheckSquare, ArrowRight } from 'lucide-react'

interface TasksProps {
  currentRole: string
}

interface Task {
  id: number
  title: string
  status: 'pending' | 'completed'
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  step?: number
}

const mockTasks = {
  'buying-partner': [
    { id: 1, title: 'Complete Buying Calculator & Share results', status: 'pending', dueDate: '2026-06-05', priority: 'high', step: 1 },
    { id: 2, title: 'Complete ALIE Forms & Upload any required Financial Docs', status: 'pending', dueDate: '2026-06-08', priority: 'high', step: 2 },
  ],
  'selling-partner': [
    { id: 1, title: 'Update listing documents', status: 'pending', dueDate: '2026-06-05', priority: 'high' },
    { id: 2, title: 'Respond to buyer inquiry', status: 'pending', dueDate: '2026-06-04', priority: 'high' },
    { id: 3, title: 'Provide additional financial data', status: 'completed', dueDate: '2026-06-01', priority: 'medium' },
    { id: 4, title: 'Sign engagement letter', status: 'pending', dueDate: '2026-06-12', priority: 'medium' },
  ],
  'internal': [
    { id: 1, title: 'Review buyer qualification - Acme Partners', status: 'pending', dueDate: '2026-06-05', priority: 'high' },
    { id: 2, title: 'Approve listing - XYZ Advisory', status: 'pending', dueDate: '2026-06-04', priority: 'high' },
    { id: 3, title: 'Send introduction email', status: 'completed', dueDate: '2026-06-01', priority: 'medium' },
    { id: 4, title: 'Schedule case kickoff meeting', status: 'pending', dueDate: '2026-06-08', priority: 'medium' },
  ],
}

export function Tasks({ currentRole }: TasksProps) {
  const tasks = mockTasks[currentRole as keyof typeof mockTasks] || []

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
          <h3 className="text-xl font-bold mb-4 text-foreground">
            {currentRole === 'buying-partner' ? 'Onboarding Workflow' : 'Pending'}
          </h3>
          {currentRole === 'buying-partner' && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                Follow these steps in order to complete your buyer qualification:
              </p>
            </div>
          )}
          <div className={currentRole === 'buying-partner' ? 'space-y-4 mb-8' : 'space-y-3 mb-8'}>
            {pendingTasks.map((task, index) => (
              <div key={task.id}>
                <Card className="hover:shadow-md transition">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        {currentRole === 'buying-partner' && task.step ? (
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                            {task.step}
                          </div>
                        ) : (
                          <CheckSquare className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                        )}
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
                {currentRole === 'buying-partner' && index < pendingTasks.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
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
                    <CheckSquare className="w-5 h-5 text-green-600 mt-1" />
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
