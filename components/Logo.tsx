import { cn } from "@/lib/utils"
import Link from "next/link"

const Logo = ({
	className,
	spanDesign,
}: {
	className?: string
	spanDesign?: string
}) => {
	return (
		<Link href={"/"} className="inline-block">
			<div className="flex flex-col relative">
				<h2
					className={cn(
						"text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
						className
					)}
				>
					Razval
					<span
						className={cn(
							"text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
							spanDesign
						)}
					>
						nuy
					</span>
				</h2>
				<p
					className={cn(
						"text-shop_light_green font-black absolute right-0 top-7 tracking-wider uppercase text-xs",
						spanDesign
					)}
				>
					Market
				</p>
			</div>
		</Link>
	)
}

export default Logo
