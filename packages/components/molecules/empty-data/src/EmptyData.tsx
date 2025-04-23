

import EmptyIcon from "./assets/EmptyIcon"
import styles from "./EmptyData.module.scss"

type TEmptyDataProps = {
    label: string
}

const EmptyData = ({ label }: TEmptyDataProps) => {
    return (
        <div data-testid="dt-con-empty" className={styles["container"]}>
            <EmptyIcon />
            <p className={styles["container__label"]} dangerouslySetInnerHTML={{ __html: label }} />
        </div>
    )
}

export default EmptyData;