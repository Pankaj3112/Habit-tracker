export const getHabits = () => {
	let habits = localStorage.getItem("habits");
	if (habits) {
		return JSON.parse(habits);
	}
	return [];
};

export const setHabits = (h) => {
	let habits = JSON.stringify(h);
	localStorage.setItem("habits", habits);
};