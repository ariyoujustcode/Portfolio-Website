import React from "react";

interface SimpleIconProps {
    icon: {
        title: string;
        slug: string;
        hex: string;
        svg: string;
    };
    size?: number;
    color?: string;
}

export const SimpleIcon: React.FC<SimpleIconProps> = ({
    icon,
    size = 24,
    color,
}) => {
    // Extract the <path> from the SVG string
    const pathMatch = icon.svg.match(/<path d="(.+?)"\/>/);
    const pathData = pathMatch ? pathMatch[1] : "";

    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color || `#${icon.hex}`}
        >
            <title>{icon.title}</title>
            <path d={pathData} />
        </svg>
    );
};
