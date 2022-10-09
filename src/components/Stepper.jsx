import Steps from "../UI/Steps";

function Stepper({ steps }) {
	return (
		<div className="my-14 flex items-center justify-center w-full">
			<Steps steps={steps} />
		</div>
	);
}

export default Stepper;
