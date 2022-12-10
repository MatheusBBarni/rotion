export interface Document {
  id: string
  title: string
  content: string
}

// Request
export interface FetchDocumentRequest {
  id: string
}

export interface DeleteDocumentRequest {
  id: string
}

export type SaveDocumentRequest = Document

// Response
export interface FetchAllDocumentsResponse {
  data: Array<Document>
}

export interface FetchDocumentResponse {
  data: Document
}

export  interface CreateDocumentResponse {
  data: Document
}
