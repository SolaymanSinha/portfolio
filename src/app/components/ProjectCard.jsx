import React from "react";
import {
	CodeBracketIcon,
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
	DeviceTabletIcon,
	EyeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
	isTabletResponsive,
	isMobileResponsive,
	isDesktopResponsive,
}) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
				<motion.div
					animate={{ display: "block" }}
					initial={{ display: "none" }}
					transition={{ ease: "easeOut", duration: 1 }}
					className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
					<div className="w-full h-full hidden group-hover:flex gap-4 justify-center items-center relative">
						<div className="absolute bottom-1">
							<div className="flex gap-2">
								{isMobileResponsive && <DevicePhoneMobileIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer" />}
								{isTabletResponsive && <DeviceTabletIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer" />}
								{isDesktopResponsive && <ComputerDesktopIcon className="h-8 w-8 text-[#ADB7BE] cursor-pointer" />}
							</div>
						</div>
						<Link
							href={gitUrl}
							className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
							<CodeBracketIcon className="h-10 w-10 text-[#FFFFFF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#DA297B] transition-all duration-100" />
						</Link>
						<Link
							href={previewUrl}
							className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
							<EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#DA297B] transition-100 duration-100" />
						</Link>
					</div>
				</motion.div>
			</div>
			<div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
