// components/ui/status-badge.tsx
import Link from "next/link"
import { ReactNode } from "react"

interface StatusBadgeProps {
	status?: string
	text?: string
	isLink?: boolean
	href?: string
	icon?: ReactNode
}

export function StatusBadge({
	status,
	text,
	isLink = false,
	href = "/deal",
	icon,
}: StatusBadgeProps) {
	if (!status) return null

	const isSale = status === "sale" && text === "Sale!"
	const isNew = status === "new" && text === "New!"
	const isHot = status === "hot" && icon

	if (!isSale && !isNew && !isHot) return null

	const baseClasses =
		"absolute top-2 left-2 z-10 text-sm border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect"

	if (isLink) {
		const linkClasses = isHot
			? `${baseClasses.replace("px-2", "p-1")} border-shop_orange/50 group-hover:border-shop_orange hover:text-shop_dark_green`
			: `${baseClasses} border-shop_light_green/50 group-hover:border-shop_light_green`

		if (icon) {
			return (
				<Link href={href} className={linkClasses}>
					{icon}
				</Link>
			)
		}

		return (
			<Link href={href} className={linkClasses}>
				<p className="m-0">{text}</p>
			</Link>
		)
	}

	return <p className={baseClasses}>{text}</p>
}
