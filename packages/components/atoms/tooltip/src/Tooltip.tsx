import clsx from 'clsx';
import InfoIcon from './assets/InfoIcon';

type TooltipProps = {
  content: string;
  className?: {
    container?: string;
    text?: string;
  };
  variant?: 'dark' | 'light';
  position?: 'top' | 'bottom';
};

const Tooltip = ({ content, className, variant = 'dark', position="top" }: TooltipProps) => {
  return (
    <div className={clsx("tooltip", className?.container)}>
      <InfoIcon fill={variant=='light' ? "#fff" : '#001A41'} />
      <span
        data-testid="dt-tooltip"
        className={clsx(
          "tooltip_text",
          `variant__${variant}`,
          `position__${position}`,
          className?.text
        )}
      >
        {content}
      </span>
    </div>
  );
};

export default Tooltip;
