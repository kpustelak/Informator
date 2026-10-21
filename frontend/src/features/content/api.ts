import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api/client'

export type ContentType = 'text' | 'richtext' | 'image'

export interface ContentEntryResponse {
  id: string
  key: string
  type: ContentType
  value: unknown
  version: number
  updatedAt: string
}

export const useContentList = (workspaceId: string) =>
  useQuery({
    queryKey: ['content', workspaceId],
    queryFn: () => api<ContentEntryResponse[]>(`/v1/workspaces/${workspaceId}/content`),
  })
