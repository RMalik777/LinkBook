import { type Icon, Globe, FolderGit2, Mail, Linkedin, MessageSquare, Instagram } from "lucide-svelte";

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
    url: "https://www.raflimalik.com",
  },
  {
    icon: Globe,
    title: "Blog Website",
    desc: "blog.raflimalik.com",
    url: "https://blog.raflimalik.com",
  },
  {
    icon: FolderGit2,
    title: "Github",
    desc: "RMalik777",
    url: "https://github.com/RMalik777",
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
    url: "https://www.linkedin.com/in/rafli-malik/",
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "raflimalik__",
    url: "https://instagram.com/raflimalik__",
  },
  {
    icon: MessageSquare,
    title: "Discord",
    desc: "play7",
    url: "https://discord.com/users/432877551640117249",
  },
];
