import {
	css,
	figma,
	git,
	html,
	javascript,
	mongodb,
	nodejs,
	reactjs,
	redux,
	tailwind,
	typescript,
	php,
	python,
	batStateU,
	batStateUProj,
	promptopia,
	portfolio,
	design,
	webdev,
	backend,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "ABOUT",
	},
	{
		id: "contact",
		title: "CONTACT",
	},
];

const services = [
	{
		title: "UI/UX Design",
		icon: design,
	},
	{
		title: "Web Development",
		icon: webdev,
	},
	{
		title: "Frontend Development",
		icon: backend,
	},
];

const experiences = [
	{
		title: "Frontend Developer Intern",
		company_name: "BatStateU Digital Transformation Center (DTC)",
		icon: batStateU,
		iconBg:
			"linear-gradient(91deg, #BFBFBF 0%, rgba(115, 187, 201, 0.72) 100%)",
		date: "January 2023 - June 2023",
		points: [
			"Developing and maintaining web application using HTML, CSS, JavaScript, PHP and other related technologies.",
			"Collaborating with cross-functional teams including backend developers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const skills = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const projects = [
	{
		name: "My Portfolio",
		description:
			"A comprehensive online portfolio adeptly showcasing my proficiencies and extensive experience within the realm of software development.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/gitcommit222/angela-ante",
	},
];

export { services, experiences, skills, projects };
