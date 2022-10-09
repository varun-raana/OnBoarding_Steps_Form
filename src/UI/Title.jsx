import logo from "../assets/logo.png";

function Title() {
	return (
		<h2 className="flex items-center justify-center">
			<span className="mr-2">
				<img src={logo} alt="logo" className="w-8 block resize-none object-cover" />
			</span>
			<span className="font-bold text-2xl text-gray-800">Eden</span>
		</h2>
	);
}

export default Title;
