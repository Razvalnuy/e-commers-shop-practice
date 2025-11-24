import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: {
		template: "%s - Shopcart online store",
		default: "Shopcart online store",
	},
	description: "Shopcart online store, Your one stop shop for all your needs",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="font-poppins antialiased">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
