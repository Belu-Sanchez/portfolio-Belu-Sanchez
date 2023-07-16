import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  type: "submit" | "button" | "reset";
  title: string;
  description: string;
  linkGitHub: string;
  linkDemo: string;
  handleClick?: () => void;
};

export default Props;
