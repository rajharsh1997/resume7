import {  useToasts } from 'react-toast-notifications'
import React from 'react'
const FormWithToasts = () => {
  const { addToast } = useToasts()

  addToast('Saved Successfully', { appearance: 'success' })
  return(null)
}
export default FormWithToasts