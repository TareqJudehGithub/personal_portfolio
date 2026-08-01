import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button } from "../components/button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

import { GitHub, LinkedIn } from "@mui/icons-material";
import { useState } from "react";
export const Hero = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleDownloadClick = () => {
		setIsLoading(true);
		window.setTimeout(() => {
			setIsLoading(false);
		}, 1200);
	};

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* Background */}

			<div className="absolute inset-0">
				<img
					className="w-full h-full object-cover opacity-40 "
					src="/hero-bg.jpg"
					alt="Hero image"
				/>
				<div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
			</div>

			{/* Green Dots*/}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(30)].map((_, index) => (
					<div
						key={index}
						className="absolute w-1.5 h-1.5 rounded-full opacity-60"
						style={{
							backgroundColor: "#20B2A6",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Column - Text Context */}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-bold">
								<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
								Fullstack ASP.NET React.js Web Developer
							</span>
						</div>

						{/* Headline */}
						<div className="space-y-4">
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
								Crafting
								<span className="text-primary glow-text">digital</span>
								<br />
								<span className="md:text-5xl lg:text-5xl xl:text-6xl">
									experiences with
								</span>
								<br />
								<span className="font-serif italic font-normal text-white">
									precision.
								</span>
							</h1>
							<p className="text-lg text-muted-foreground max-w-md md:max-w-lg lg:max-w-xl  animate-fade-in animation-delay-200">
								Hello! I’m Tareq, a persistent and highly motivated Full-Stack
								Developer with a deep passion for technology. I specialize in
								crafting clean backend logic using C# and ASP.NET Core
								alongside dynamic frontends with React.js. Whether it is
								securing application pipelines, optimizing databases, or
								setting up automated deployment workflows, I focus on turning
								complex technical requirements into elegant digital realities.
							</p>
						</div>
						{/* CTA  */}
						<div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
							<Button size="lg" className="w-50">
								<a
									href="#contact"
									className="flex flex-row justify-center items-center gap-1"
								>
									<span>Contact Me</span> <ArrowRight size={20} />
								</a>
							</Button>

							{isLoading ? (
								<AnimatedBorderButton>
									<>
										<span>
											<Download className="animate-bounce" size={20} />
										</span>
										<h3> Downloading...</h3>
									</>
								</AnimatedBorderButton>
							) : (
								<AnimatedBorderButton
									href="/cv/tareq_judeh_cv.pdf"
									download="tareq_judeh_cv.pdf"
									onClick={handleDownloadClick}
								>
									<Download size={20} /> Download CV
								</AnimatedBorderButton>
							)}
						</div>

						{/* Social Links*/}
						<div className="flex justify-start gap-4 animate-fade-in animation-delay-400 mx-4">
							<span className="align-text-top text-2xl text-muted-foreground">
								Follow:
							</span>
							<a
								className="glass rounded-full hover:bg-primary transition-all duration-300"
								href="https://www.linkedin.com/in/tareq-judeh-56051379/"
								target="_blank"
							>
								<LinkedIn fontSize="large" />
							</a>
							<a
								className="glass rounded-full hover:bg-primary transition-all duration-300"
								href="https://github.com/TareqJudehGithub"
								target="_blank"
							>
								<GitHub fontSize="large" />
							</a>
						</div>
					</div>

					{/* Right Column - Profile Image */}
					<div>
						{/* Profile Image*/}
						<div className="relative max-w-md mx-auto">
							<div
								className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
							/>
							<div className="relative glass rounded-3xl p-2 glow-border">
								<img
									className="w-full aspect-4/5 object-cover rounded-2xl"
									src="/profile_image.png"
									alt="Tareq Judeh image"
								/>
								{/* Floating Badge*/}
								<div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
										<span className="text-sm font-medium">
											Available for work
										</span>
									</div>
								</div>

								{/* Stats Badge*/}
								{/* <div className="absolute -top-4 -lef-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
									<div className="text-2xl font-bold text-primary">
										stats line1
									</div>
									<div className="text-xs text-muted-foreground">
										stats lin2
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>

				{/* Skills Section */}
				<div className="mt-20 animate-fade-in animation-delay-600">
					<p className="text-sm text-muted-foreground mb-6 text-center font-bold">
						Technologies I work with
					</p>
					<div className="relative overflow-hidden">
						<div className="flex animate-marquee">
							{[...skills, ...skills].map((skill, index) => (
								<div key={index} className="shrink-0 px-8 py-4">
									<span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div
				className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
			>
				<a
					href="#about"
					className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
				>
					<span className="text-xs uppercase tracking-wider">Scroll</span>
					<ChevronDown className="w-6 h-6 animate-bounce" />
				</a>
			</div>
		</section>
	);
};
export default Hero;

const skills = [
	"ASP.NET Core Web API",
	"ASP.NET Core Identity",
	"Entity Framework Core",
	"React.js",
	"Redux Toolkit",
	"RTK Query",
	"Azure Cloud",
	"SQL Server",
	"MSSQL",
	"PostgreSQL",
	"TypeScript",
	"Material UI",
	"Tailwind CSS",
	"Cloudinary",
	"Bootstrap",
	"HTML/CSS",
	"GitHub",
	"Git",
	"GitHub Actions",
	"GitHub Copilot",
	"MAI-Code-1-Flash",
	"Linux CLI",
	"Photoshop",
	"Windows OS",
];
