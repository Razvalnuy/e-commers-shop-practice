import { Product } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image"
import { Flame, StarIcon } from "lucide-react"
import Image from "next/image"
import AddToCartButton from "./AddToCartButton"
import AddToWishListButton from "./AddToWishListButton"
import { PriceView } from "./PriceView"
import { StatusBadge } from "./ui/status-badge"
import { Title } from "./ui/text"

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<div className="text-sm border border-dark_blue/20 rounded-md bg-white group">
			<div className="relative group overflow-hidden bg-shop_light_bg">
				{product?.images && (
					<Image
						className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
						src={urlFor(product?.images[0]).url()}
						alt="ProductImage"
						loading="lazy"
						width={700}
						height={700}
					/>
				)}
				<AddToWishListButton product={product} />
				<StatusBadge status={product?.status} text="Sale!" />
				<StatusBadge status={product?.status} text="New!" />
				<StatusBadge
					status={product?.status}
					icon={
						<Flame
							size={18}
							fill="#fb8c08"
							className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
						/>
					}
					isLink
				/>
			</div>
			<div className="p-3 flex flex-col gap-2">
				{product?.categories && (
					<p className="uppercase line-clamp-1 text-xs text-shop_light_text">
						{product?.categories?.map((cat) => cat).join(", ")}
					</p>
				)}
				<Title className="text-sm line-clamp-1">{product?.name}</Title>
				<div className="flex items-center gap-2">
					<div className="flex items-center">
						{[...Array(5)].map((_, index) => (
							<StarIcon
								size={12}
								key={index}
								className={
									index < 4 ? "text-shop_light_green" : "text-shop_light_text"
								}
								fill={index < 4 ? "#93D991" : "#ababab"}
							/>
						))}
					</div>
					<p className="text-shop_light_text text-xs tracking-wide">
						5 Отзывов
					</p>
				</div>
				<div className="flex items-center gap-2.5">
					<p className="font-medium">В наличии</p>
					<p
						className={`${product?.stock === 0 ? "text-red-600" : "text-shop_light_green/80 font-semibold"}`}
					>
						{(product?.stock as number) > 0 ? product?.stock : "Недоступен"}
					</p>
				</div>

				<PriceView
					price={product?.price}
					discount={product?.discount}
					className="text-sm"
				/>
				<AddToCartButton product={product} className="w-36 rounded-full" />
			</div>
		</div>
	)
}

export default ProductCard
