export interface Post {
  id: string
  Page: string
  Slug: string
  Image: string
  Date: number
  Authors: string[]
  Published: 'Yes' | 'No'
  preview?: any[]
}

export interface Block {
  role: string
  value: {
    id: string
    version: number
    type: string
    created_time: number
    last_edited_time: number
    properties: any
    parent_id: string
    file_ids?: string
    format?: any
  }
}
