import { type Icon, Globe, Github, Mail, Linkedin, Instagram } from "@lucide/svelte";

interface LinkType {
	icon: typeof Icon;
	title: string;
	desc: string;
	url: string;
}

interface LinkGroup {
	name: string;
	links: LinkType[];
}

export const LinkData: LinkGroup[] = [
	{
		name: "Social",
		links: [
			{
				icon: Github,
				title: "Github",
				desc: "RMalik777",
				url: "https://raf.li/github",
			},
			{
				icon: Mail,
				title: "Email",
				desc: "Rafli.Malik@gmail.com",
				url: "mailto:Rafli.Malik@gmail.com",
			},
			{
				icon: Linkedin,
				title: "LinkedIn",
				desc: "Rafli Malik",
				url: "https://raf.li/linkedin",
			},
			{
				icon: Instagram,
				title: "Instagram",
				desc: "raflimalik__",
				url: "https://raf.li/instagram",
			},
		],
	},
	{
		name: "Websites",
		links: [
			{
				icon: Globe,
				title: "Personal Website",
				desc: "raflimalik.com",
				url: "https://raf.li/porto",
			},
			{
				icon: Globe,
				title: "Blog Website",
				desc: "blog.raflimalik.com",
				url: "https://raf.li/blog",
			},
			{
				icon: Globe,
				title: "Font Calculator",
				desc: "font.raflimalik.com",
				url: "https://font.raflimalik.com",
			},
			{
				icon: Globe,
				title: "Tailwind Color Viewer",
				desc: "tailwind.raflimalik.com",
				url: "https://tailwind.raflimalik.com",
			},
		],
	},
];
