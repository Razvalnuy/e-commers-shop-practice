import { categoriesData, quickLinksData } from "@/constants/data"
import { cn } from "@/lib/utils"
import { TooltipContent } from "@radix-ui/react-tooltip"
import Link from "next/link"
import Container from "./Container"
import FooterTop from "./FooterTop"
import Logo from "./Logo"
import SocialMedia from "./SocialMedia"
import { Button } from "./ui/button"
import { SubText, SubTitle } from "./ui/text"
import { Tooltip, TooltipTrigger } from "./ui/tooltip"

const Footer = () => {
	return (
		<footer className="bg-white border-t">
			<Container>
				<FooterTop />
				<div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Logo />
						<SubText>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora!
						</SubText>
						<SocialMedia
							className="text-darkColor"
							iconClassName="border-darkColor/60 hover:border-shop_light_green hover: text-shop_light_green"
							toolTipClassName="bg-darkColor text-white"
						/>
					</div>
					<div>
						<SubTitle>Quick Links</SubTitle>
						<ul className="space-y-3 mt-4">
							{quickLinksData?.map((link) => (
								<li key={link?.title}>
									<Link
										href={link?.href}
										className="hover:text-shop_light_green hoverEffect font-medium"
									>
										{link?.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<SubTitle>Categories</SubTitle>
						<ul className="space-y-3 mt-4">
							{categoriesData?.map((link) => (
								<li key={link?.title}>
									<Link
										href={`/category/${link?.href}`}
										className="hover:text-shop_light_green hoverEffect font-medium"
									>
										{link?.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-4">
						<SubTitle>Newsletter</SubTitle>
						<SubText>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
							laudantium?
						</SubText>
						<form className="space-y-3">
							<input placeholder="Enter your email" type="email" required />
							<Button className="w-full">Subscribe</Button>
						</form>
					</div>
				</div>

				<div className="py-6 border-t text-center text-sm text-gray-600">
					<div>
						© {new Date().getFullYear()} <Logo className="text-sm" />.
						<Tooltip>
							<TooltipTrigger>
								Все права защищены.
								<TooltipContent
									side="top"
									align="center"
									className={cn("bg-darkColor text-white font-semibold p-1 ")}
								>
									<p>су4ка даже не пытайся </p>
								</TooltipContent>
							</TooltipTrigger>
						</Tooltip>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
