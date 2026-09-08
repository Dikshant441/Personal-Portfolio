import { track } from "@vercel/analytics";

export type AnalyticsEvent =
    | "resume_preview_open"
    | "resume_download"
    | "resume_open_new_tab"
    | "contact_form_submit"
    | "contact_form_result"
    | "contact_quick_link_click"
    | "social_link_click"
    | "book_meeting_click"
    | "project_card_open"
    | "project_demo_click"
    | "project_repo_click"
    | "nav_click"
    | "theme_toggle"
    | "section_view";

type AnalyticsEventProps = Record<string, string | number | boolean>;

export function trackEvent(name: AnalyticsEvent, props?: AnalyticsEventProps) {
    if (process.env.NODE_ENV !== "production") {
        console.debug("[analytics]", name, props ?? {});
        return;
    }

    try {
        track(name, props);
    } catch {
        // Analytics must never break the UI it's attached to.
    }
}
