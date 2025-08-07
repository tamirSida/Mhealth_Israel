'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import CMSModal from './CMSModal'

interface CMSControlProps {
  elementId: string
  content: string
  onUpdate: (value: string) => void
  children: React.ReactNode
}

export default function CMSControl({ elementId, content, onUpdate, children }: CMSControlProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isAdmin, loading } = useAuth()

  const handleEdit = () => {
    setIsModalOpen(true)
  }

  const handleSave = (newContent: string) => {
    onUpdate(newContent)
    setIsModalOpen(false)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  // Don't show edit controls while loading or if user is not admin
  if (loading || !isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <div className="cms-control">
        {children}
        <button 
          className="cms-edit-btn" 
          onClick={handleEdit}
          title={`Edit ${elementId}`}
        >
          <i className="fas fa-edit"></i>
        </button>
      </div>
      
      {isModalOpen && (
        <CMSModal
          title={`Edit ${elementId}`}
          content={content}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </>
  )
}