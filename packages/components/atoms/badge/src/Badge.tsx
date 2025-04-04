
import clsx from "clsx";

type BadgeProps = {
    title: string;
    className?: string;
    titleSize: string
    backgroundColor?: string;
}

const Badge = ({ title, className, titleSize, backgroundColor }: BadgeProps) => {
    const toRGBA = (hex: string, opacity = 0.35) => {
      const r = parseInt(hex?.slice(1, 3), 16);
      const g = parseInt(hex?.slice(3, 5), 16);
      const b = parseInt(hex?.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };
    return (
        <div className={clsx("badge", className)} style={{ backgroundColor: toRGBA(backgroundColor as string, 0.35) }}>
            <span style={{ fontSize: titleSize }}>{title}</span>
        </div>
    )
}

export default Badge