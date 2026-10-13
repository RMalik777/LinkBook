import { type LucideIcon, Briefcase, Mail, Palette, PenLine, Type } from "@lucide/svelte";
import { siGithub, siInstagram } from "simple-icons";

// simple-icons no longer ships LinkedIn, so keep a monochrome copy of the mark here.
const linkedinPath =
	"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

export interface LinkType {
	/** Lucide icon component. Use either `icon` or `path`. */
	icon?: LucideIcon;
	/** SVG path data on a 24x24 viewBox, for brand marks. */
	path?: string;
	identifier: string;
	title: string;
	desc: string;
	url: string;
	/** When set, the row shows a copy button that copies this value. */
	copy?: string;
}

export interface LinkGroup {
	name: string;
	links: LinkType[];
}

export const Profile = {
	name: "Rafli Malik",
	bio: "Software Engineer",
	location: "Jakarta",
};

export const LinkData: LinkGroup[] = [
	{
		name: "Social",
		links: [
			{
				path: siGithub.path,
				identifier: "github",
				title: "GitHub",
				desc: "RMalik777",
				url: "https://raf.li/github",
			},
			{
				icon: Mail,
				identifier: "email",
				title: "Email",
				desc: "Rafli.Malik@gmail.com",
				url: "mailto:Rafli.Malik@gmail.com",
				copy: "Rafli.Malik@gmail.com",
			},
			{
				path: linkedinPath,
				identifier: "linkedin",
				title: "LinkedIn",
				desc: "Rafli Malik",
				url: "https://raf.li/linkedin",
			},
			{
				path: siInstagram.path,
				identifier: "instagram",
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
				icon: Briefcase,
				identifier: "personal-website",
				title: "Personal Website",
				desc: "raflimalik.com",
				url: "https://raf.li/porto",
			},
			{
				icon: PenLine,
				identifier: "blog-website",
				title: "Blog Website",
				desc: "blog.raflimalik.com",
				url: "https://raf.li/blog",
			},
			{
				icon: Type,
				identifier: "font-calculator",
				title: "Font Calculator",
				desc: "font.raflimalik.com",
				url: "https://font.raflimalik.com",
			},
			{
				icon: Palette,
				identifier: "tailwind-color-viewer",
				title: "Tailwind Color Viewer",
				desc: "tailwind.raflimalik.com",
				url: "https://tailwind.raflimalik.com",
			},
		],
	},
];
