export const Certificate = () => {
	return (
		<section id="cert" className="py-32 relative overflow-hidden">
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
						Continuous Learning & Professional Credentials
					</span>
					<h2
						className="text-3xl md:text-4xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
					>
						Blending a lifelong passion for technology with structured,
						industry-standard education
						<span className="font-serif italic font-normal text-white">
							{" "}
							in computer science, enterprise backend systems, and modern
							frontend frameworks
						</span>
					</h2>

					<p
						className="text-muted-foreground
           animate-fade-in animation-delay-200"
					></p>
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
								<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"></div>

								{/* Contents*/}
								<div className="pl-8 pr-12 text-left py-2">
									<div
										className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 min-h-50 lg:min-h-100 xl:min-h-75`}
									>
										{exp.title && (
											<h3 className="text-xl font-semibold mt-2">
												{exp.title}
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
										{/* Cred here below */}
										<div className="px-3 py-5 text-xs rounded-full text-muted-foreground/75 hover:text-primary/50">
											<a href={exp.credentials} target="_blank">
												Certificate Credentials
											</a>
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

export default Certificate;

const experience: ExperienceType[] = [
	{
		company: "HarvardX, Harvard School of Engineering and Applied Sciences",
		title: "CS50x: CS50's Introduction to Computer Science",
		description:
			"Computer Science study by HarvardX, an online learning initiative of Harvard University. This is CS50x , Harvard University's introduction to the intellectual enterprises of computer science and the art of programming",
		technologies: [
			"Computer Science",
			"Programming",
			"Web Development",
			"Data Structures",
			"C",
			"Python",
			"SQL",
			"JavaScript",
			"HTML/CSS",
		],
		credentials:
			"https://courses.edx.org/certificates/3ba0f27118dc48cb9229f51f88d58dbd",
	},
	{
		company:
			"Coderz for Software and Training  Accredited by  Talal Abu-Ghazaleh",
		title: "Full Stack Web Development Bootcamp (ASP.NET Core & React)",
		description:
			"A hands-on in-person full-stick web development program, through which I acquired tech. knowledge and career skills throughout working and collaborating with my colleagues in class and online, building web applications and one final project",
		technologies: [
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
			"Bootstrap",
			"HTML/CSS",
			"GitHub",
			"Git",
		],
		credentials:
			"https://drive.google.com/file/d/1IkTz0nesY0oJqcicPG044O9dNbcoQzQ2/view",
	},
	{
		company: "Udemy, Inc.",
		title: "Learn to build an e-commerce store with .Net, React & Redux",
		description:
			"Built a full-stack e-commerce app using ASP.NET Core Web API, React, Redux Toolkit, and RTK Query to deliver product browsing, account creation, checkout, and order placement, while giving admins tools to manage inventory and product details",
		technologies: [
			"ASP.Net Core Web API",
			"ASP.NET Core Identity",
			"Entity Framework Core",
			"RESTful APIs",
			"Postman",
			"Azure Cloud",
			"(CI/CD)",
			"MSSQL",
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
		],
		credentials:
			"https://www.udemy.com/certificate/UC-7ff1dc41-caf8-461c-a26d-7f499b65fd5b/",
	},
	{
		company: "Udemy, Inc.",
		title: "Ultimate ASP.NET Core Web API Development Guide",
		description:
			"Build and secure RESTful APIs with ASP.NET Core, EF Core, JWT, and Azure using Enterprise Level Design Patterns",
		technologies: [
			"ASP.Net Core Web API",
			"ASP.NET Core Identity",
			"Entity Framework Core",
			"RESTful APIs",
			"Postman",
			"MSSQL",
			"JWT",
			"Azure Cloud",
			"Design Patterns",
		],
		credentials:
			"https://www.udemy.com/certificate/UC-6bd0f6ec-849b-422a-a5ae-1fc32ded779a/",
	},
	{
		company: "Udemy, Inc.",
		title: "Complete Microsoft SQL Server Database Design Masterclass",
		description:
			"Database Design | SQL Server | T-SQL | Database Tables | Foreign Keys | SQL CRUD | Views | Triggers | Stored Procedures",
		technologies: [
			"SQL Server",
			"SQL",
			"MSSQL",
			"Database Developer Tools",
			"Database Administration",
			"Database Design and Development",
		],
		credentials:
			"https://www.udemy.com/certificate/UC-600f8770-2cb7-42b2-a782-73c1bdbac88e/",
	},
	{
		company: "Udemy, Inc.",
		title: "Master C# Programming - Beginner to Advanced (with OOP)",
		description:
			"Learn C#, Object Oriented Programming, Collections, C# Exercises and more",
		technologies: [
			"C#",
			"Object Oriented Programming (OOP)",
			"ASP.NET Core",
			"Console Development",
		],
		credentials:
			"https://www.udemy.com/certificate/UC-74dd5596-19d6-4471-ae59-6ffa8500e636/",
	},
];

type ExperienceType = {
	title?: string;
	company?: string;
	description: string;
	technologies: string[];
	credentials?: string;
};
