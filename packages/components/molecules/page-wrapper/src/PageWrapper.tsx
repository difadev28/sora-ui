import { ReactNode } from "react"
import styles from './PageWrapper.module.scss'
import clsx from "clsx";
type Props = {
    children: ReactNode;
    classNames?: string;
}

const PageWrapper = ({ children, classNames }: Props) => {
    return (
        <div className={clsx(styles['container-page-wrapper'], classNames)}>
            {children}
        </div>
    )
}

export default PageWrapper;