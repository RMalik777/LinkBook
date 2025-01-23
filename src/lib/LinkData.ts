import {
	type Icon,
	Globe,
	FolderGit2,
	Mail,
	Linkedin,
	MessageSquare,
	Instagram,
} from "lucide-svelte";

interface LinkType {
	icon: typeof Icon;
	title: string;
	desc: string;
	url: string;
}

export const LinkData: LinkType[] = [
	{
		icon: Globe,
		title: "Website",
		desc: "www.raflimalik.com",
		url: "https://raf.li/porto",
	},
	{
		icon: Globe,
		title: "Blog Website",
		desc: "blog.raflimalik.com",
		url: "https://raf.li/blog",
	},
	{
		icon: FolderGit2,
		title: "Github",
		desc: "RMalik777",
		url: "https://raf.li/github",
	},
	{
		icon: Mail,
		title: "Personal Email",
		desc: "Rafli.Malik@gmail.com",
		url: "mailto:Rafli.Malik@gmail.com",
	},
	{
		icon: Mail,
		title: "University Email",
		desc: "Rafli.Malik@binus.ac.id",
		url: "mailto:Rafli.Malik@binus.ac.id",
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
	{
		icon: MessageSquare,
		title: "Discord",
		desc: "play7",
		url: "https://discord.com/users/432877551640117249",
	},
];
