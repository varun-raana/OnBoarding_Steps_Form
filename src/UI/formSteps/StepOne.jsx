import React from "react";

function StepOne() {
	return (
		<div className="flex flex-col">
			<label htmlFor="name" className="text-gray-700 font-semibold text-sm">
				Full Name
			</label>
			<input
				type="text"
				name="name"
				placeholder="Steve Jobs"
				className="text-sm py-3 px-4 border border-gray-100 rounded-md outline-none focus:outline-none font-medium mt-1"
			/>
			<div className="flex flex-col mt-4">
				<label
					htmlFor="displayName"
					className="text-gray-700 font-semibold text-sm">
					Display Name
				</label>
				<input
					type="text"
					name="displayName"
					placeholder="Steve"
					className="text-sm py-3 px-4 border border-gray-100 rounded-md outline-none focus:outline-none font-medium mt-1"
				/>
			</div>
		</div>
	);
}

export default StepOne;
