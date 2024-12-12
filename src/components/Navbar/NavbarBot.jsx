"use client"
import Link from "next/link"
import { HouseLine, MagnifyingGlass, UserCircle } from "@phosphor-icons/react"
import style from "./Navbar.module.css"

const NavbarBot = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-2xl bg-color-accent flex justify-evenly py-6 fixed bottom-0 z-auto text-color-primary">
        <Link href={"/"} className="item flex flex-col font-bold text-color-secondary px-3 justify-center items-center group">
          <HouseLine size={32} className="text-color-kng"/>
          <h1 className="px-1 text-color-primary">Home</h1>
        </Link>
        <Link href={"/Pencarian"} className="item flex flex-col font-bold text-color-secondary px-3 justify-center items-center group">
          <MagnifyingGlass size={32} className="text-color-kng"/>
          <h1 className="px-1 text-color-primary">Telusuri</h1>
        </Link>
        <Link href={"/users/dashboard"} className="item flex flex-col font-bold text-color-secondary px-3 justify-center items-center group">
          <UserCircle size={32} className="text-color-kng"/>
          <h1 className="px-1 text-color-primary">Profil</h1>
        </Link>
      </div>
    </div>
  )
}

export default NavbarBot
