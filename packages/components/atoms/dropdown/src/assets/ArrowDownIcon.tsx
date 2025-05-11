import clsx from "clsx";

const ArrowDown = ({className, fill="white"}: {className?: string, fill?:string}) => {
  return (
    <svg data-testid="svg" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx("w-2", className)}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.3254 3.87963C4.13815 4.04012 3.86185 4.04012 3.67461 3.87963L0.174614 0.879635C-0.0350482 0.699925 -0.0593297 0.384275 0.120381 0.174613C0.300092 -0.0350492 0.615741 -0.0593302 0.825404 0.12038L4 2.84146L7.1746 0.120381C7.38426 -0.0593296 7.69991 -0.0350485 7.87962 0.174614C8.05933 0.384276 8.03505 0.699925 7.82539 0.879636L4.3254 3.87963Z" fill={fill} />
    </svg>
  )
}

export default ArrowDown;