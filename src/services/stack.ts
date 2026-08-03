import pb from '@/lib/pocketbase/client'

export interface StackRecord {
  id: string
  category?: string
  items?: string[]
  order?: number
}

export const getStack = () => pb.collection<StackRecord>('stack').getFullList({ sort: 'order' })
