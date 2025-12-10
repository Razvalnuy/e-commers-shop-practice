"use client"

import { cn } from "@/lib/utils"
import { Product } from "@/sanity.types"
import { ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"

interface Props {
	product: Product
	className?: string
}

const AddToCartButton = ({ product, className }: Props) => {
	const isOutStock = product?.stock === 0
	const handledAddToCart = () => console.log("Добавить в корзину!")
	return (
		<div>
			<Button
				onClick={handledAddToCart}
				disabled={isOutStock}
				className={cn(
					"w-full bg-shop_dark_green/80 text-shop_light_bg shadow-none border border-shop_btn_dark_green/70 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
					className
				)}
			>
				<ShoppingBag /> {isOutStock ? "Нет в наличии" : "В корзину"}
			</Button>
		</div>
	)
}

export default AddToCartButton
