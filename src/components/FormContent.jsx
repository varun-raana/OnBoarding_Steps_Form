function FormContent({ steps }) {
	return (
		<div>
			{steps === 1 && (
				<>
					<h1 className="text-xl text-center md:text-3xl  font-bold text-gray-800">
						Welcome! First things first...
					</h1>
					<p className="text-center text-gray-500/70 font-medium mt-2 mb-14 text-sm md:text-base">
						You can always change them later.
					</p>
				</>
			)}
			{steps === 2 && (
				<>
					<h1 className="text-xl text-center md:text-3xl font-bold text-gray-800">
						Let's set up a home for all your work
					</h1>
					<p className="text-center text-gray-500/70 font-medium mt-2 mb-14 text-sm md:text-base">
						You can always create another workspace later.
					</p>
				</>
			)}{" "}
			{steps === 3 && (
				<>
					<h1 className="text-xl text-center md:text-3xl font-bold text-gray-800">
						How are you planning to use Eden?
					</h1>
					<p className="text-center text-gray-500/70 font-medium mt-2 mb-14 text-sm md:text-base">
						We'll streamline your setup experience accordingly.
					</p>
				</>
			)}
		</div>
	);
}

export default FormContent;
