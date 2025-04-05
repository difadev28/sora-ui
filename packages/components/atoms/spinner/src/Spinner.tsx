import clsx from "clsx";
import styles from './Spinner.module.scss'
import { SpinnerType, SpinnerWrapperProps } from "./type";
import SpinnerIcon from "./assets/SpinnerIcon";

export function SpinnerWrapper({
	children,
	className,
	...rest
}: SpinnerWrapperProps) {
	return (
		<div className={clsx("flex gap-2", className)} {...rest}>
			{children}
		</div>
	);
}

function Spinner({ className, ...rest }: SpinnerType) {
	return (
		<SpinnerIcon
			className={clsx(styles['spinner'], clsx(className))}
			{...rest}
		/>
	);
}

export default Spinner;
