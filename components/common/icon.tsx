import { cloneElement } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const iconMap: Record<string, JSX.Element> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Twitter: <FaXTwitter />,
  Mail: <FaEnvelope />,
  ExternalLink: <FaArrowUpRightFromSquare />,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const icon = iconMap[name];
  return className ? cloneElement(icon, { className }) : icon;
}
