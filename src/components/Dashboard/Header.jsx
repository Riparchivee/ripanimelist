"use client"
import BackButton from "@/components/Utilities/BackButton"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4">
            <BackButton />
            <h3 className="text-2xl text-color-primary font-bold">
                {title}
            </h3>
        </div>
    )
}

export default Header