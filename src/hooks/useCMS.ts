'use client'

import { useState, useEffect, useCallback } from 'react'
import { cmsService } from '@/lib/cms'

interface UseCMSOptions {
  saveToFirebase?: boolean
  autoLoad?: boolean
}

export function useCMS(elementId: string, defaultContent: string, options: UseCMSOptions = {}) {
  const { saveToFirebase = false, autoLoad = false } = options
  const [content, setContent] = useState(defaultContent)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadContent = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const loadedContent = await cmsService.getContent(elementId)
      if (loadedContent !== null) {
        setContent(loadedContent)
      }
    } catch (err) {
      setError('Failed to load content')
      console.error('Error loading content:', err)
    } finally {
      setIsLoading(false)
    }
  }, [elementId])

  useEffect(() => {
    if (autoLoad && saveToFirebase) {
      loadContent()
    }
  }, [elementId, autoLoad, saveToFirebase, loadContent])

  const updateContent = async (newContent: string) => {
    setContent(newContent)
    
    if (saveToFirebase) {
      setIsLoading(true)
      setError(null)
      
      try {
        const success = await cmsService.saveContent(elementId, newContent)
        if (!success) {
          throw new Error('Failed to save content')
        }
      } catch (err) {
        setError('Failed to save content')
        console.error('Error saving content:', err)
        // Revert content on error
        setContent(defaultContent)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return {
    content,
    updateContent,
    isLoading,
    error,
    loadContent
  }
}