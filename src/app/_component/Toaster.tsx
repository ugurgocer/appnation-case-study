"use client";

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/rtk'
import { removeToast } from '@/lib/store/toasterSlice';
import IToast from '@/lib/types/IToast';

export default function Toaster() {
  const toasts = useAppSelector(state => state.toaster.toasts)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    toasts.forEach(toast => {
      if (toast.duration != null) {
        const timer = setTimeout(() => {
          dispatch(removeToast(toast.id))
        }, toast.duration)
        return () => clearTimeout(timer)
      }
    })
  }, [toasts, dispatch])

  const typeStyles: Record<IToast['type'], string> = {
    error:   'bg-red-500 text-white',
    info:    'bg-blue-500 text-white'
  }

  return (
    <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`px-4 py-2 rounded shadow ${typeStyles[toast.type]}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}