import React from "react";
import { RightClickIcon } from "../../components/icons";

function StepFour() {
	return (
		<div className="flex flex-col items-center">
			<div className="mt-3 mb-8 bg-violet-500 p-4 rounded-full">
				{<RightClickIcon />}
			</div>
			<div>
				<h1 className="text-xl text-center md:text-3xl -tracking-wide font-bold capitalize text-black/90">
					Congratulations, Eren!
				</h1>
				<p className="text-center text-gray-500/80 font-medium mt-4 mb-3 w-full text-sm md:text-base">
					You have completed onboarding, you can start using the Eden!
				</p>
			</div>
		</div>
	);
}

export default StepFour;
