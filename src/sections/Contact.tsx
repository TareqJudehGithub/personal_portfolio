import {
	Mail,
	MapPin,
	Phone,
	Send,
	type LucideProps,
	CheckCircle,
	AlertCircle,
	LoaderCircle,
} from "lucide-react";
import { Button } from "../components/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LinkedIn, WhatsApp } from "@mui/icons-material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material";

export const Contact = () => {
	const [formData, setFormData] = useState<FormDataType>({
		name: "",
		email: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>({
		type: null,
		message: "",
	});
	const [open, setOpen] = useState(true);
	const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsLoading(true);
		setSubmitStatus({ type: null, message: "" });

		try {
			// Import EmailJS .ENV variables
			const servicesId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
			const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID;
			const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

			if (!servicesId || !publicKey || !templateId) {
				("EmailJS configuration is missing. Please check your environment variables.");
			}

			// Email
			await emailjs.send(
				servicesId,
				templateId,
				{
					name: formData.name,
					email: formData.email,
					message: formData.message,
				},
				publicKey,
			);

			emailjs.send(servicesId, templateId, {
				name: formData.name,
				email: formData.email,
			});

			setSubmitStatus({
				type: "success",
				message: "Thank you for your message. I will get back to you soon.",
			});
			formData.name = "";
			formData.email = "";
			formData.message = "";
			event.target.reset();

			setOpen(true);
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(error.message);
				setSubmitStatus({
					type: "error",
					message:
						error.message || "Error sending message. Please try again later.",
				});
			} else {
				console.log("Unexpected error type:", error);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section id="contact" className="py-32 relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
						Get In Touch
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
						Let's build{" "}
						<span className="font-serif italic font-normal text-white">
							something great.
						</span>
					</h2>
					<p className="text-muted-foreground animate-fade-in animation-delay-200">
						Have a project in mind? I'd love to hear about it. Send me a
						message and let's discuss how we can work together.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
					<div className="glass p-8 rounded-3xl border-primary/30 animate-fade-in animation-delay-300">
						<form className="space-y-6" action="" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Name
								</label>
								<input
									className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
									id="name"
									type="text"
									required
									placeholder="Your name..."
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
								/>
							</div>

							<div>
								<label
									className="block text-sm font-medium mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
									id="email"
									type="email"
									pattern="[^@\s]+@[^@\s]+\.[a-zA-Z]{3}"
									placeholder="Leave your Email address if you like"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
								/>
							</div>

							<div>
								<label
									className="block text-sm font-medium mb-2"
									htmlFor="message"
								>
									Message
								</label>
								<textarea
									className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
									id="message"
									rows={4}
									cols={10}
									required
									placeholder="Your message..."
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
								/>
							</div>
							<Button
								className="w-full"
								size="lg"
								type="submit"
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<span>
											<LoaderCircle className="animate-spin" />
										</span>
										<h3> Sending...</h3>
									</>
								) : (
									<>
										Send Message
										<Send size={18} />
									</>
								)}
							</Button>

							{submitStatus.type && open && (
								<button
									className={`flex items-center gap-3
                     p-4 rounded-xl ${
												submitStatus.type === "success"
													? "bg-green-500/10 border border-green-500/20 text-green-400"
													: "bg-red-500/10 border border-red-500/20 text-red-400"
											}`}
									onClick={() => setOpen(false)}
								>
									{submitStatus.type === "success" ? (
										<CheckCircle className="w-5 h-5 shrink-0" />
									) : (
										<AlertCircle className="w-5 h-5 shrink-0" />
									)}
									<p className="text-sm">{submitStatus.message}</p>
								</button>
							)}
						</form>
						{/* Place your loading icon below*/}

						{/* <div>
							{open && (
								<Alert severity="" onClose={() => setOpen(false)}>
									This alert has a functioning close button!
								</Alert>
							)}
						</div> */}
					</div>

					{/* Contact Info */}
					<div className="space-y-6 animate-fade-in animation-delay-400">
						<div className="glass rounded-3xl p-8">
							<h3 className="text-xl font-semibold mb-6">
								Contact Information
							</h3>
							<div className="space-y-4">
								{contactInfo.map((item, index) => (
									<a
										key={index}
										href={item.href}
										target="_blank"
										className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
									>
										<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
											<item.icon className="w-5 h-5 text-primary" />
										</div>
										<div>
											<div className="text-sm text-muted-foreground">
												{item.label}
											</div>
											<div className="font-medium">{item.value}</div>
										</div>
									</a>
								))}
							</div>
						</div>

						{/* Availability Card */}
						<div className="glass rounded-3xl p-8 border border-primary/30">
							<div className="flex items-center gap-3 mb-4">
								<span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
								<span className="font-medium">Currently Available</span>
							</div>
							<p className="text-muted-foreground text-sm">
								I'm currently open to new opportunities and exciting projects.
								Whether you need a full-time engineer or a freelance. I can be
								available onsite and online as well. let's talk!
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* End of section  */}
		</section>
	);
};

export default Contact;

const contactInfo: ContactInfo[] = [
	{
		icon: LinkedIn,
		label: "LinkedIn",
		value: "Tareq Judeh",
		href: "https://www.linkedin.com/in/tareq-judeh-56051379/",
	},
	{
		icon: Mail,
		label: "Email",
		value: "tareq.joudeh@gmail.com",
		href: "mailto:tareq.joudeh@gmail.com",
	},
	{
		icon: WhatsApp,
		label: "WhatsApp",
		value: "+962 79 6969904",
		href: "https://wa.me/962796969904",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+962 79 6969904",
		href: "tel:+962796969904",
	},
	{
		icon: MapPin,
		label: "Location",
		value: "Amman, Jordan",
		href: "#contact",
	},
];

type ContactInfo = {
	icon:
		| React.ForwardRefExoticComponent<
				Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
		  >
		| (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
				muiName: string;
		  });
	label: string;
	value: string;
	href: string;
};

type FormDataType = {
	name: string;
	email: string;
	message: string;
};
type SubmitStatusType = {
	type: string | null;
	message: string;
};
