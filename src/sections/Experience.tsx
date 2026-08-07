export const Experience = () => {
	return (
		<section id="experience" className="py-32 relative overflow-hidden">
			<div
				className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
			/>
			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="max-w-3xl mb-16">
					<span
						className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
					>
						Career Journey
					</span>
					<h2
						className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
					>
						Building my experience{" "}
						<span className="font-serif italic font-normal text-white">
							{" "}
							through learning and hands-on practice
						</span>
					</h2>

					<p
						className="text-muted-foreground
           animate-fade-in animation-delay-200"
					>
						I’m a web developer growing through real projects, continuous
						learning, and a strong focus on building responsive, secure, and
						user-friendly web applications.
					</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					<div className="timeline-glow absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
					{/* Exp items*/}
					<div className="space-y-12 grid md:grid-cols-2">
						{experience.map((exp, index) => (
							<div
								key={index}
								className="relative animate-fade-in"
								style={{ animationDelay: `${(index + 1) * 150}ms` }}
							>
								{/* Timeline dot */}
								<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
									{exp.current && (
										<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
									)}
								</div>

								{/* Contents*/}
								<div className="pl-8 pr-12 text-left py-2">
									<div
										className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 min-h-50 lg:min-h-100 xl:min-h-75`}
									>
										<span className="text-sm text-primary font-medium">
											{exp.period}
										</span>
										{exp.role && (
											<h3 className="text-xl font-semibold mt-2">
												{exp.role}
											</h3>
										)}
										{exp.company && (
											<p className="text-muted-foreground">{exp.company}</p>
										)}
										<p className="text-sm text-muted-foreground mt-4">
											{exp.description}
										</p>
										<div className={`flex flex-wrap gap-2 mt-4`}>
											{exp.technologies.map((tech, techIndex) => (
												<span
													key={techIndex}
													className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;

const experience: ExperienceType[] = [
	{
		period: "March 2025 - Present",
		role: "Fullstack Web Developer (Independent / Project-Based)",
		company: "",
		description:
			"Building and improving web applications through self-directed learning, using ASP.NET Core Web API and React.js to create responsive, user-friendly solutions. I also work on secure application practices, database design, and deployment workflows while strengthening my skills in modern fullstack development.",
		technologies: [
			"ASP.Net Core Web API",
			"ASP.NET Core Identity",
			"Entity Framework Core",
			"RESTful APIs",
			"Postman",
			"Azure Cloud",
			"CI/CD",
			"MSSQL",
			"SQL",
			"React.js",
			"RTK Query",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"Material UI",
			"HTML/CSS",
			"Cloudinary",
			"GitHub",
			"GitHub Copilot",
			"GitHub Actions",
			"Git",
			"Linux CLI",
		],
		current: true,
	},
	{
		period: "March 2025 - March 2025",
		role: "Freelance IT Support & Digital Assets Specialist",
		company: "",
		description:
			"Prepared digital assets and user-facing graphics with Adobe Photoshop, managed secure network and server infrastructure for small businesses, and mentored clients by simplifying complex technical concepts into clear, practical guidance.",
		technologies: [
			"Network Administration",
			"Server Management",
			"MS Windows",
			"MS Office",
			"Systems Support",
			"Adobe Photoshop",
			"Technical Training",
			"Client Support",
		],
		current: false,
	},
	{
		period: "Feb 2000 - Jan 2005",
		role: "ERP Technical Support Officer",
		company: "Al Ghasaq Computer Systems / Houston Tech, Amman - Jordan",
		description:
			"Managed ERP data migration and quality assurance for hospitality clients, while training junior support staff and helping strengthen team performance and technical reliability.",
		technologies: [
			"ERP Systems",
			"Data Migration",
			"Quality Assurance",
			"Customer Support",
			"Customer Product Training",
			"Technical Support",
			"Staff Training",
		],
		current: false,
	},
];

type ExperienceType = {
	period?: string;
	role?: string;
	company?: string;
	description: string;
	technologies: string[];
	current: boolean;
};
