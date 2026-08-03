import pb from '@/lib/pocketbase/client'

export interface CertificateRecord {
  id: string
  title?: string
  issuer?: 'Unity' | 'GameDev.tv' | 'Udemy' | 'Unity Technologies'
  year?: string
  category?: 'unity' | 'gamedev' | 'udemy' | 'unitytech'
  link?: string
  image?: string
  order?: number
}

export const getCertificates = () =>
  pb.collection<CertificateRecord>('certificates').getFullList({ sort: 'order' })
