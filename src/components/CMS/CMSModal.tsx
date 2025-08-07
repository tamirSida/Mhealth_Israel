'use client'

import { useState, useEffect } from 'react'

interface CMSModalProps {
  title: string
  content: string
  onSave: (content: string) => void
  onClose: () => void
}

export default function CMSModal({ title, content, onSave, onClose }: CMSModalProps) {
  const [editedContent, setEditedContent] = useState(content)

  useEffect(() => {
    setEditedContent(content)
  }, [content])

  const handleSave = () => {
    onSave(editedContent)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="cms-modal" onClick={handleBackdropClick}>
      <div className="cms-modal-content">
        <div className="cms-modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="cms-close">
            &times;
          </button>
        </div>
        
        <div className="cms-modal-body">
          <label>Content:</label>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--font-size-base)',
              lineHeight: '1.5',
              resize: 'vertical'
            }}
          />
        </div>
        
        <div className="cms-modal-footer">
          <button onClick={handleSave} className="btn btn--primary">
            Save
          </button>
          <button onClick={onClose} className="btn btn--secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}