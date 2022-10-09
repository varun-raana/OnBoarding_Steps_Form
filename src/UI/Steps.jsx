const step = ["1", "2", "3", "4"];

function Steps({ steps }) {
	return (
		<div>
			<div className="flex gap-8 md:gap-14 relative overflow-hidden">
				{/* progress bar */}
				<span
					className={`absolute top-1/2 left-0 h-[1px] transition-all duration-300 ease-in ${
						steps === 1
							? `w-1/5`
							: steps === 2
							? "w-2/4"
							: steps === 3
							? "w-4/5"
							: "w-full"
					} bg-violet-600/70 -z-20 overflow-hidden rounded-full`}></span>

				{/* steps */}
				<span
					className={`absolute top-1/2 left-0 h-[1px] w-full bg-gray-200 -z-30 overflow-hidden rounded-full`}></span>
				{step.map((item, index) => (
					<span
						key={item}
						className={` h-8 md:h-10 w-8 md:w-10 flex items-center justify-center rounded-full text-sm cursor-pointer relative ${
							index + 1 === steps
								? "bg-violet-500 text-violet-100 border-none"
								: index < steps
								? "bg-violet-500 text-violet-100"
								: "bg-white border border-gray-200"
						}`}>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}

export default Steps;
