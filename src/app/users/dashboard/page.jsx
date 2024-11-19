import { authUserSession } from "@/libs/auth-libs"
import BackButton from "@/components/Utilities/BackButton"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()

    return (
      <>
        <BackButton />
        <div className="mt-3 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Haloo, {user?.name}</h5>
            <Image className="w-36 h-36 rounded-se-md" src={user?.image} alt="..." width={250} height={250}/>
            <div className="flex flex-wrap gap-4 py-8">
                <Link 
                    href="/users/dashboard/collection"
                    className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
                >
                    My Collection
                </Link>
                <Link 
                    href="/users/dashboard/comment"
                    className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
                >
                    My Comment
                </Link>
            </div>
        </div>
      </>
    )
}

export default Page