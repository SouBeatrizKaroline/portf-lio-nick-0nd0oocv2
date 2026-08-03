import pb from '@/lib/pocketbase/client'

export interface ContactData {
  name: string
  email: string
  subject?: string
  message: string
}

export const sendContactMessage = (data: ContactData) =>
  pb.collection('contact_messages').create({ ...data, status: 'new' })
