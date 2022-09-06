import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import Link from "next/link";
function Login() {
	const [phoneNumber, setPhoneNumber] = useState(0);
	const [password, setPassword] = useState(null);

	const toast = useToast();

	const verifyPhone = (input) => {
		var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return re.test(input);
	};
	const SubmitForm = async (e) => {
		e.preventDefault();

		await fetch(`${process.env.backendUrl}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phonenum: phoneNumber,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.code == "ERROR") {
					toast({
						title: data.message,
						status: "error",
						variant: "left-accent",
						duration: 9000,
						isClosable: true,
					});
				} else {
					localStorage.setItem(
						"token",
						data.token
					);
					toast({
						title:
							data.message +
							"  " +
							"Redirecting To the dashboard page...",
						status: "success",
						variant: "left-accent",
						duration: 9000,
						isClosable: true,
					});
					setTimeout(() => {
						window.location.href = "/";
					}, 1000);
				}
			});
	};
	return (
		<section className="bg-gray-50 dark:bg-gray-900 ">
			<div className="flex flex-col items-center justify-center px-6 py-8 h-fit md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg  h-fit shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="px-6 py-7">
						<h1 className="text-4xl mb-1 font-bold text-green-600 font-serif">
							Devinder
						</h1>
						<h1 className="text-lg  mb-2 italic font-serif dark:text-green-300 text-green-600 leading-tight tracking-tight md:text-2xl">
							Login into Your Account
						</h1>
						<form
							className="space-y-4 md:space-y-6 "
							onSubmit={SubmitForm}
						>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Your
									Phone
									Number
								</label>
								<input
									type="tel"
									name="tel"
									id="phone"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
									placeholder="e.g (123)456-7890"
									required
									onChange={(
										e
									) =>
										setPhoneNumber(
											e
												.target
												.value
										)
									}
								/>
							</div>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Your Secure Password"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
									required
									onChange={(
										e
									) =>
										setPassword(
											e
												.target
												.value
										)
									}
								/>
							</div>

							<button
								type="submit"
								className="w-full text-white bg-green-600 over:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Login
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Dont Have an
								Account?{" "}
								<Link
									href="/register"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Register
									here
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
