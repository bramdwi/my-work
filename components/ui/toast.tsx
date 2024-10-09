import React from 'react'
import { Toast } from './use-toast'

interface ToastProps {
  toast: Toast
  onDismiss: (id: string) => void
}

export const ToastComponent: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
      <h3 className="text-lg font-semibold">{toast.title}</h3>
      {toast.description && <p className="mt-1 text-sm text-gray-500">{toast.description}</p>}
      <button
        onClick={() => onDismiss(toast.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        &times;
      </button>
    </div>
  )
}