import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2">
            {
                user ? <Link href="/users/dashboard" className="py-1 text-color-secondary">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-utama text-color-secondary py-1 px-8 rounded  inline-block">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton
