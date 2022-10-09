// import the progress bar
import StepProgressBar from "react-step-progress";

// import the stylesheet
import "react-step-progress/dist/index.css";

// setup the step content
const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;

// setup step validators, will be called before proceeding to the next step
function step2Validator() {
	// return a boolean
	return true;
}

function step3Validator() {
	// return a boolean
	return true;
}

function onFormSubmit() {
	// handle the submit logic here
	// This function will be executed at the last step
	// when the submit button (next button in the previous steps) is pressed
	console.log("submit done");
}

function Stepper() {
	return (
		<div>
			{/* // render the progress bar */}
			<StepProgressBar
				startingStep={0}
				submitBtnName="Launch Eden"
				onSubmit={onFormSubmit}
				steps={[
					{
						content: step1Content,
					},
					{
						content: step2Content,
						validator: step2Validator,
					},
					{
						content: step3Content,
						validator: step3Validator,
					},
				]}
			/>
			;
		</div>
	);
}

export default Stepper;
