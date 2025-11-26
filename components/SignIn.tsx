import { SignInButton } from "@clerk/nextjs"

const SignIn = () => {
	return (
		<SignInButton mode="modal">
			<button className="text-xs font-semibold hover:text-darkColor hoverEffect text-lightColor hover:cursor-pointer">
				Login
			</button>
		</SignInButton>
	)
}

export default SignIn
