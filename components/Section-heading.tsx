import React from "react";

type SectionHeadingProp = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProp) {
    return (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            {children}
        </h2>
    );
}
