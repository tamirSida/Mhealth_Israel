import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

export interface ContentData {
  id: string
  content: string
  lastUpdated: Date
  updatedBy?: string
}

export class CMSService {
  private collectionName = 'content'

  async getContent(elementId: string): Promise<string | null> {
    try {
      const docRef = doc(db, this.collectionName, elementId)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data() as ContentData
        return data.content
      }
      
      return null
    } catch (error) {
      console.error('Error fetching content:', error)
      return null
    }
  }

  async saveContent(elementId: string, content: string, userId?: string): Promise<boolean> {
    try {
      const docRef = doc(db, this.collectionName, elementId)
      const contentData: ContentData = {
        id: elementId,
        content,
        lastUpdated: new Date(),
        updatedBy: userId
      }

      // Check if document exists
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        // Update existing document
        await updateDoc(docRef, {
          content,
          lastUpdated: new Date(),
          updatedBy: userId
        })
      } else {
        // Create new document
        await setDoc(docRef, contentData)
      }

      return true
    } catch (error) {
      console.error('Error saving content:', error)
      return false
    }
  }

  async getAllContent(): Promise<Record<string, string>> {
    try {
      const contentMap: Record<string, string> = {}
      
      // For now, return empty object - in full implementation,
      // you would query the entire collection
      // This prevents loading all content on page load for performance
      
      return contentMap
    } catch (error) {
      console.error('Error fetching all content:', error)
      return {}
    }
  }
}

export const cmsService = new CMSService()