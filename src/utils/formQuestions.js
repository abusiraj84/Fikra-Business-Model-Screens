export const formTwoQuestions = [
	{
		id: "F2Q1",
		type: "Multiple",
		options: [
			{ value: "B2C", id: "F2Q1O1" },
			{ value: "B2B", id: "F2Q1O2" },
		],
		heading: "الشرائح المستهدفة *",
		subHeading: "يرجى الاختيار",
		description:
			'B2C هي اختصار لـ "الأعمال التجارية بين الشركات والمستهلكين."' + ' B2B اختصار لـ "الأعمال التجارية بين الشركات."',
	},
	{
		id: "F2Q2",
		type: "Single",
		options: [
			{ value: "اختيار ١", id: "F2Q2O1" },
			{ value: "اختيار ٢", id: "F2Q2O2" },
			{ value: "اختيار ٣", id: "F2Q2O3" },
		],
		heading: "القيمة المقترحة Value Proposition *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
];
