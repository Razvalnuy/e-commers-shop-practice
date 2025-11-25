"use client"

import { headerData } from "@/constants/data"
import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, useRef } from "react"
import { useClickAway } from "react-use"
import Logo from "./Logo"
import SocialMedia from "./SocialMedia"

interface SideBarProps {
	isOpen: boolean
	onClose: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
	const pathname = usePathname() // проверка пути

	const menuRef = useRef<HTMLDivElement | null>(null)

	useClickAway(menuRef, () => {
		if (isOpen) onClose()
	})
	return (
		<div
			className={`text-white/80 fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} hoverEffect`}
		>
			<div
				ref={menuRef}
				className="min-w-72 max-w-96 bg-black z-50 h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
			>
				<div className="flex items-center justify-between gap-5">
					<Logo className="text-white" spanDesign="group-hover:text-white" />
					<button
						className="hover:text-shop_light_green hoverEffect hover:cursor-pointer"
						onClick={onClose}
					>
						<X />
					</button>
				</div>
				<div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
					{headerData.map((item) => (
						<Link
							className={`hover:text-shop_light_green hoverEffect ${
								pathname === item?.href && "text-shop_light_green"
							}`}
							key={item?.title}
							href={item?.href}
						>
							{item?.title}
						</Link>
					))}
				</div>
				<SocialMedia />
			</div>
		</div>
	)
}

export default SideMenu
