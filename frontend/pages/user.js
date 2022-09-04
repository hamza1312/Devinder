import React from "react";

export default function User() {
	return (
		<div>
			<main className="w-screen bg-gray-700 h-screen lg:px-36 px-8 py-8 flex flex-col items-center justify-center">
				<div className="rounded-lg   bg-gray-900  text-white p-8 py-6 lg:w-3/6 t w-full  ">
					<h1 className="text-3xl font-bold text-blue-500 font-mono mb-6">
						UserNAME!
					</h1>
				</div>
			</main>
		</div>
	);
}
export async function getServerSideProps(context) {
	const res = await fetch("http://localhost:9000/feed");
  
	const data = await res.json();
	return { props: { data } };
}
  
