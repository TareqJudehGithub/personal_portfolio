import {
	Lightbulb,
	Ear,
	Laptop,
	Handshake,
	type LucideProps,
} from "lucide-react";

export const About = () => {
	return (
		<section id="about" className="py-32 relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/*Left Column*/}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
								About Me
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
							Building the future,{" "}
							<span className="font-serif italic font-normal text-white">
								one component at a time
							</span>
						</h2>
						<div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
							<p>
								I enjoy turning ideas into practical, user-friendly digital
								experiences. I focus on building secure, scalable solutions
								with a strong balance of frontend elegance and backend
								reliability.
							</p>
						</div>

						<div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
							<p className="text-lg font-medium italic text-foreground">
								"My mission is to create digital experiences that are not just
								functional, but truly delightful — products that users love to
								use and developers love to maintain."
							</p>
						</div>
					</div>

					{/* "Right Column - Highlights" */}
					<div className="grid sm:grid-cols-2 gap-6">
						{highlights.map((item, index) => (
							<div
								key={index}
								className="glass p-6 rounded-2xl animate-fade-in"
								style={{
									animationDelay: `${(index + 1) * 150}ms`,
								}}
							>
								<div className="flex items-center justify-center rounded-xl w-12 h-12 bg-primary/10 mb-4 hover:bg-primary/20">
									<item.icon className="w-7 h-7 text-primary" />
								</div>
								<h3 className="text-lg font-semibold mb-2">{item.title}</h3>
								<p className="text-sm text-muted-foreground">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

const highlights: Highlights[] = [
	{
		icon: Lightbulb,
		title: "Analytical Thinking & Problem-Solving",
		description: "",
	},
	{
		icon: Ear,
		title: "Clear Communication & Active Listening",
		description: "",
	},
	{
		icon: Handshake,
		title: "Collaboration, Adaptability & Time Management",
		description: "",
	},
	{
		icon: Laptop,
		title: "Self-Directed Learning & Initiative",
		description: "",
	},
];

type Highlights = {
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	title: string;
	description: string;
};
