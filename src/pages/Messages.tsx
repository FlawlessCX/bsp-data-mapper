import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { MessageSquare } from 'lucide-react'

interface MessagesProps {
  currentRole: string
}

interface Message {
  id: number
  from: string
  subject: string
  preview: string
  date: string
  unread: boolean
}

const buyerMessages: Message[] = [
  { id: 1, from: 'Succession Team', subject: 'Your qualification status update', preview: 'We\'ve completed your initial review...', date: '2026-06-03', unread: true },
  { id: 2, from: 'Seller - ABC Advisory Group', subject: 'RE: Interest in listing #2451', preview: 'Thank you for your interest. We\'d like to schedule a call...', date: '2026-06-02', unread: true },
  { id: 3, from: 'Business Partner', subject: 'Financing options for acquisition', preview: 'Based on your profile, here are some lending options...', date: '2026-06-01', unread: false },
  { id: 4, from: 'Succession Team', subject: 'Documents needed for next step', preview: 'Please submit the following documents by June 5th...', date: '2026-05-31', unread: false },
  { id: 5, from: 'Seller - XYZ Financial', subject: 'Client book details attached', preview: 'As requested, here are the additional details...', date: '2026-05-30', unread: false },
]

const sellerMessages: Message[] = [
  { id: 1, from: 'Succession Team', subject: 'Listing #2451 approved for marketplace', preview: 'Congratulations! Your listing has been approved...', date: '2026-06-03', unread: true },
  { id: 2, from: 'Buyer - Acme Partners', subject: 'Interest in your client book', preview: 'We are very interested in your listing and would like to discuss...', date: '2026-06-02', unread: true },
  { id: 3, from: 'Business Partner', subject: 'Potential buyer introduction', preview: 'I have a qualified buyer who may be interested in your practice...', date: '2026-06-01', unread: false },
  { id: 4, from: 'Succession Team', subject: 'Seller expectations document', preview: 'Please review the attached expectations and confirm...', date: '2026-05-31', unread: false },
  { id: 5, from: 'Buyer - Growth Capital', subject: 'Follow-up inquiry', preview: 'Following our previous conversation, I have additional questions...', date: '2026-05-30', unread: false },
]

const internalMessages: Message[] = [
  { id: 1, from: 'System', subject: 'New buyer qualification - Apex Partners', preview: 'A new buyer has been qualified and is ready for marketplace...', date: '2026-06-03', unread: true },
  { id: 2, from: 'Team Member - Sarah', subject: 'Case #2024-001 update', preview: 'The introduction meeting has been scheduled for next week...', date: '2026-06-02', unread: false },
  { id: 3, from: 'System', subject: 'Listing #2451 documents updated', preview: 'The seller has uploaded updated financial statements...', date: '2026-06-01', unread: false },
  { id: 4, from: 'Team Member - John', subject: 'Buyer qualification follow-up', preview: 'I\'ve sent the additional documentation request...', date: '2026-05-31', unread: false },
  { id: 5, from: 'System', subject: 'New interest submission', preview: 'Acme Partners has expressed interest in listing #2415...', date: '2026-05-30', unread: false },
]

export function Messages({ currentRole }: MessagesProps) {
  let messages: Message[] = []
  let sendersList: string[] = []

  if (currentRole === 'buying-partner') {
    messages = buyerMessages
    sendersList = ['Succession Team', 'Seller', 'Business Partner']
  } else if (currentRole === 'selling-partner') {
    messages = sellerMessages
    sendersList = ['Succession Team', 'Buyer', 'Business Partner']
  } else {
    messages = internalMessages
    sendersList = ['System', 'Team Members', 'Automation']
  }

  const unreadCount = messages.filter(m => m.unread).length

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2 text-foreground">Messages</h2>
      <p className="text-muted-foreground mb-8">
        Your conversations and updates from {sendersList.join(', ')}.
      </p>

      {/* Stats */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{unreadCount}</p>
          </CardContent>
        </Card>
      </div>

      {/* Messages List */}
      <div className="space-y-3">
        {messages.map(message => (
          <Card key={message.id} className={`hover:shadow-md transition ${message.unread ? 'bg-primary/5 border-primary/20' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-semibold text-foreground ${message.unread ? 'font-bold' : ''}`}>
                        {message.from}
                      </h4>
                      {message.unread && (
                        <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      )}
                    </div>
                    <p className={`${message.unread ? 'font-semibold text-foreground' : 'text-foreground'} truncate`}>
                      {message.subject}
                    </p>
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {message.preview}
                    </p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm text-muted-foreground">{message.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
