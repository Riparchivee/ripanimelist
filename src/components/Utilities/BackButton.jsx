"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "@phosphor-icons/react"
const BackButton = () => {
  const router = useRouter()
  return (
     <div className="px-4 py-4">
     <button onClick={() => router.back()}>
      <ArrowLeft size={32} 
      className="text-color-primary hover:text-color-accent"
      />
     </button>
     </div>
    )
}

export default BackButton