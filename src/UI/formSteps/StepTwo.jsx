function StepTwo() {
	return (
		<div className="flex flex-col">
			<label
				htmlFor="name"
				className="text-gray-600 font-semibold text-sm capitalize">
				workspace Name
			</label>
			<input
				type="text"
				name="name"
				placeholder="Eden"
				className="text-sm py-3 px-4 border border-gray-100 rounded-md outline-none focus:outline-none font-medium mt-2"
			/>
			<div className="flex flex-col mt-4">
				<label
					htmlFor="workspaceURL"
					className="text-gray-600 font-semibold text-sm capitalize">
					workspace URL{" "}
					<span className="text-gray-300 lowercase font-normal">(optional)</span>
				</label>
				<div className="flex overflow-hidden h-full border border-gray-100 rounded-md mt-2">
					<span className="inline-block bg-gray-100 border-r border-gray-200/30 font-medium text-sm py-3 px-2  text-gray-400">
						www.eden.com/
					</span>
					<input
						type="text"
						name="workspaceURL"
						placeholder="Example"
						className="inline-block text-sm px-4 py-2 outline-none focus:outline-none font-medium"
					/>
				</div>
			</div>
		</div>
	);
}

export default StepTwo;
