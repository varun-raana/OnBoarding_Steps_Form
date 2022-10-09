import { GroupUser, User } from "./icons";

function RadioButtons() {
	return (
		<div className="flex sm:flex-row flex-col gap-3 items-center justify-center h-full">
			<div>
				<input className="hidden peer" id="radio_1" type="radio" name="radio" />
				<label
					className="flex flex-col  py-4 px-5 border border-gray-100 cursor-pointer peer-checked:border-violet-500 rounded-md"
					htmlFor="radio_1">
					<User />
					<h4 className="mb-2 mt-4 text-gray-700/90 font-bold text-base">
						For myself
					</h4>
					<p className="font-medium text-sm text-gray-500/70 ">
						Write better. Think more clearly. Stay Organized
					</p>
				</label>
			</div>
			<div>
				<input className="hidden peer " id="radio_2" type="radio" name="radio" />
				<label
					className="flex flex-col py-4 px-5 border border-gray-100 cursor-pointer peer-checked:border-violet-500 rounded-md transition-all duration-100 ease-linear"
					htmlFor="radio_2">
					<GroupUser className={"peer-checked:peer-valid:fill-violet-600"} />
					<h4 className="mb-2 mt-4 text-gray-700/90 font-bold text-base ">
						With my team
					</h4>
					<p className="font-medium text-sm text-gray-500/70 ">
						Wikis, docs, tasks & projects, all in one place.
					</p>
				</label>
			</div>
		</div>
	);
}

export default RadioButtons;
