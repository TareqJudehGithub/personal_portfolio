// import tags icons from react-lucide or mat ui

import { ArrowUpRight, Download } from "lucide-react";
import { GitHub } from "@mui/icons-material";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Projects = () => {
	return (
		<section id="projects" className="py-32 relative overflow-hidden">
			{/* Background glows*/}
			<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center mx-auto max-w-3x1	mb-16">
					<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
						Featured Work
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
						Projects that
						<span className="font-serif italic font-normal text-white">
							{" "}
							make an impact
						</span>
					</h2>
					<p className="text-muted-foreground animate-fade-in animation-delay-200">
						A selection of my recent work, from complex web applications to
						innovative tools that solve real-world problems.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 space-y-12"
							style={{ animationDelay: `${(index + 1) * 100}ms` }}
						>
							{/* Image*/}
							<div className="relative overflow-hidden aspect-video">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div
									className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
								/>
							</div>

							{/* Overlay links*/}
							<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<a
									href={project.link}
									target="_blank"
									className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
								>
									<ArrowUpRight className="w-5 h-5" />
								</a>
								<a
									href={project.gitHub}
									target="_blank"
									className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
								>
									<GitHub className="w-5 h-5" />
								</a>
							</div>

							{/* Content */}
							<div className="p-6 space-y-4">
								<div className="flex items-start justify-between">
									<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<ArrowUpRight
										className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
									/>
								</div>
								<p className="text-muted-foreground text-sm">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All CTA */}

				<div className="text-center mt-12 animate-fade-in animation-delay-500">
					<AnimatedBorderButton>
						View All Projects
						<Download size={20} />
					</AnimatedBorderButton>
				</div>
			</div>
		</section>
	);
};

export default Projects;

const projects: ProjectsType[] = [
	{
		title: "Winter Adventures",
		description:
			"A full-stack e-commerce application built with ASP.NET Core Web API, React, Redux Toolkit, and RTK Query, featuring product browsing, account creation, checkout, order placement, and admin tools for managing inventory and product details.",
		image: "/projects/project6.png",
		tags: [
			"ASP.NET Core Web API",
			"ASP.NET Core Identity",
			"Entity Framework Core",
			"RESTful APIs",
			"SQL Server",
			"MSSQL",
			"Azure Cloud",
			"React.js",
			"TypeScript",
			"JavaScript",
			"HTML/CSS",
			"HTML/CSS",
			"GitHub",
			"Git",
		],
		link: "https://frosty-label-aqe2hgbrfucfhdhc.francecentral-01.azurewebsites.net/",
		gitHub: "https://github.com/TareqJudehGithub/Restore",
	},
	{
		title: "Your Personal Portfolio",
		description:
			"A beautiful, responsive and modern portfolio using React, Typescript, and Tailwind CSS. Built this portfolio project with a tutorial as a starting point and expanded it with my own features and design direction.",
		image: "/projects/project2.png",
		tags: ["React", "TypeScript", "Tailwind CSS"],
		link: "https://frosty-label-aqe2hgbrfucfhdhc.francecentral-01.azurewebsites.net/",
		gitHub: "https://github.com/TareqJudehGithub/Restore",
	},
];

type ProjectsType = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link: string;
	gitHub: string;
};
