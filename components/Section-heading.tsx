import React from "react";

type SectionHeadingProp = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProp) {
    return (
        <>
            <h2 className="text-4.5xl font-bold capitalize mb- text-center">
                {children}
            </h2>
        </>
    );
}
