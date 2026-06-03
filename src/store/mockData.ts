import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserRole = 'buying-partner' | 'selling-partner' | 'internal'

export interface Partner {
  id: string
  name: string
  email: string
  role: 'buyer' | 'seller'
  stage: string
  joinedDate: string
  status: 'invited' | 'pre-qualified' | 'info-submitted' | 'docs-submitted' | 'under-review' | 'approved' | 'active'
}

export interface Listing {
  id: string
  title: string
  description: string
  sellerId: string
  sellerName: string
  type: 'client-book' | 'full-business'
  aum?: number
  clientCount?: number
  location: string
  createdDate: string
  status: 'draft' | 'pending-review' | 'approved' | 'active' | 'inactive'
  documents: string[]
}

export interface MatchedCase {
  id: string
  listingId: string
  buyerId: string
  sellerId: string
  status: 'introduced' | 'in-progress' | 'completed' | 'closed'
  createdDate: string
  stage: string
}

interface Store {
  currentUserRole: UserRole
  partners: Partner[]
  listings: Listing[]
  matchedCases: MatchedCase[]
  setUserRole: (role: UserRole) => void
  addPartner: (partner: Partner) => void
  addListing: (listing: Listing) => void
  addMatchedCase: (c: MatchedCase) => void
}

const mockPartners: Partner[] = [
  {
    id: 'bp-1',
    name: 'Acme Financial Partners',
    email: 'contact@acmefinancial.com',
    role: 'buyer',
    stage: 'Pre-qualified',
    joinedDate: '2026-05-15',
    status: 'pre-qualified',
  },
  {
    id: 'sp-1',
    name: 'Wealth Advisory Group',
    email: 'info@wealthadvisory.com',
    role: 'seller',
    stage: 'Approved for marketplace',
    joinedDate: '2026-04-20',
    status: 'approved',
  },
]

const mockListings: Listing[] = [
  {
    id: 'list-1',
    title: 'Premium Advisory Firm Client Book',
    description: 'Established client book with $150M AUM, high-net-worth individuals',
    sellerId: 'sp-1',
    sellerName: 'Wealth Advisory Group',
    type: 'client-book',
    aum: 150000000,
    clientCount: 250,
    location: 'San Francisco, CA',
    createdDate: '2026-05-01',
    status: 'active',
    documents: ['doc-1', 'doc-2'],
  },
]

const mockMatchedCases: MatchedCase[] = []

export const useStore = create<Store>()(
  persist(
    (set) => ({
      currentUserRole: 'buying-partner' as UserRole,
      partners: mockPartners,
      listings: mockListings,
      matchedCases: mockMatchedCases,
      setUserRole: (role) => set({ currentUserRole: role }),
      addPartner: (partner) => set((state) => ({ partners: [...state.partners, partner] })),
      addListing: (listing) => set((state) => ({ listings: [...state.listings, listing] })),
      addMatchedCase: (c) => set((state) => ({ matchedCases: [...state.matchedCases, c] })),
    }),
    {
      name: 'bsp-store',
    }
  )
)
