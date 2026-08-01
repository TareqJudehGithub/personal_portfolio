import { Menu, X } from "lucide-react";
import { Button } from "../components/button";
import { useEffect, useState } from "react";

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		// Listening event to each time the user scrolls
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		// Clean
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} bg-transparent py-5 z-50`}
		>
			<nav className="container mx-auto px-6 flex items-center justify-between">
				<a
					href="#"
					className="text-3xl font-bold tracking-tight hover:text-primary"
				>
					Tareq Judeh
				</a>

				<div className="hidden md:flex items-center gap-1">
					<div className="glass rounded-full px-2 py-1 flex items-center gap-1">
						{navLinks.map((link, index) => (
							<a
								className="
                  px-4 py-2 
                  text-sm text-muted-foreground 
                  hover:text-foreground 
                  rounded-full
                  hover:bg-surface"
								key={index}
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				<div className="hidden md:block">
					<Button size="sm">
						<a href="#contact">Contact Me</a>
					</Button>
				</div>

				{/* Mobile Menu Button*/}
				<button
					className="md:hidden p-2 text-foreground cursor-pointer"
					onClick={() => setIsMobileMenuOpen((prev) => !prev)}
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{/* Mobile Menu*/}
			{isMobileMenuOpen && (
				<div className="md:hidden glass-strong animate-fade-in">
					<div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
						{navLinks.map((link, index) => (
							<a
								className="
            text-lg
                  text-muted-foreground
                  hover:text-foreground
                  py-2
									ml-2
                  "
								key={index}
								href={link.href}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.label}
							</a>
						))}
						<Button
							size="sm"
							className="w-30"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<a href="#contact">Contact Me</a>
						</Button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;

const navLinks: NavLinks[] = [
	{ href: "#projects", label: "Projects" },
	{ href: "#experience", label: "Experience" },
	{ href: "#cert", label: "Certifications" },
	{ href: "#about", label: "About" },
	// { href: "#contact", label: "Contact" },
];

type NavLinks = {
	href: string;
	label: String;
};
