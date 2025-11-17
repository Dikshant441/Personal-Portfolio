import React from "react";

type SectionHeadingProp = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProp) {
    return (
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight capitalize mb-8 text-center">
            {children}
        </h2>
    );
}
