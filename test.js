const arrayChunk = (arr, numOfColumns) => {
	const chunks = [];
	while (arr.length) chunks.push(arr.splice(0, numOfColumns));
	return chunks;
};

let array = [
	{ name: "Makerere University", value: "Makerere University" },
	{
		name: "Makerere University Business School",
		value: "Makerere University Business School",
	},
	{
		name: "Kyambogo University",
		value: "Kyambogo University",
	},
	{
		name: "Uganda Martyrs University Nkozi",
		value: "Uganda Martyrs University Nkozi",
	},
	{
		name: "Kampala International University",
		value: "Kampala International University",
	},
	{
		name: "Uganda Christine University",
		value: "Uganda Christine University",
	},
	{
		name: "Ndejje University",
		value: "Ndejje University",
	},
	{
		name: "Others",
		value: "Others",
	},
];

array[8] = []
array[8].push({name:"Adam"}, { name: "Baker" }, { name: "Racheal" });
console.log(array[8]);
const check = array[8].find((value) => value.name === "Baker");

if(check!==undefined){
	var newArray = array[8].filter((value) => {
		return value.name !== "Baker";
	});
}

console.log(newArray);


