import { productType } from "@/constants/data"
import Link from "next/link"

interface Props {
	selectedTab: string
	onTabSelect: (tab: string) => void
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
	return (
		<div className="flex justify-between items-center flex-wrap gap-5">
			<div className="flex items-center gap-3 text-sm font-semibold">
				{productType?.map((item) => (
					<button
						onClick={() => onTabSelect(item?.title)}
						key={item?.title}
						className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/20"}`}
					>
						{item?.title}
					</button>
				))}
			</div>
			<Link
				href={"/shop"}
				className="border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect"
			>
				See All
			</Link>
		</div>
	)
}

export default HomeTabBar
