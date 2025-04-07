import { ReactNode } from "react";

export type SpinnerWrapperProps = {
	children?: ReactNode;
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type SpinnerType = {
	className?: string;
} & React.HTMLAttributes<SVGAElement>;


export type SVGType = {
	className: string;
	viewBox?: string;
};
