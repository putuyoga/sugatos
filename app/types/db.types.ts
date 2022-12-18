export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      activities: {
        Row: {
          id: string
          created_at: string | null
          modified_at: string | null
          type: number
          pet: number
          detail: string | null
          due: string | null
          date: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          modified_at?: string | null
          type: number
          pet: number
          detail?: string | null
          due?: string | null
          date?: string
        }
        Update: {
          id?: string
          created_at?: string | null
          modified_at?: string | null
          type?: number
          pet?: number
          detail?: string | null
          due?: string | null
          date?: string
        }
      }
      activity_types: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      pets: {
        Row: {
          id: number
          created_at: string | null
          name: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
