import PriceFormatter from "./PriceFormatter"

interface Props {
	price: number | undefined
	discount: number | undefined
	className?: string
}

export const PriceView = ({ price, discount, className }: Props) => {
	return (
		<div className="flex items-center gap-2 ">
			<PriceFormatter amount={price} />
			{price && discount && (
				<PriceFormatter
					amount={price + (discount * price) / 100}
					className="line-through font-normal text-shop_light_text"
				/>
			)}
		</div>
	)
}
