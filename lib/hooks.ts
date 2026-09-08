"use client"

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { trackEvent } from "./analytics";

const viewedSections = new Set<SectionName>();

export function useSectionView(sectionName: SectionName, threshold = 0.2) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    const hasTrackedRef = useRef(false);

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    useEffect(() => {
        if (inView && !hasTrackedRef.current && !viewedSections.has(sectionName)) {
            hasTrackedRef.current = true;
            viewedSections.add(sectionName);
            trackEvent("section_view", { section: sectionName });
        }
    }, [inView, sectionName]);

    return {
        ref,
    };
}