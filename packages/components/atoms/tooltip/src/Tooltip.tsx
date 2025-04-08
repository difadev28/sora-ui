
import InfoIcon from './assets/InfoIcon';
import clsx from 'clsx'

const Tooltip = ({ content, className }: { content: string, className?: {container?:string, text?:string} }) => {
    return (
        <div className={clsx('tooltip', className?.container)}>
            <InfoIcon />
            <span className={clsx('tooltip_text', className?.text)}>
                {content}
            </span>
        </div>
    );
};

export default Tooltip;