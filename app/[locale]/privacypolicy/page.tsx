'use client';
import { useI18n } from "@/locales/client";

export default function PrivacyPolicy() {
    const t = useI18n();

    return (
        <div className="p-4">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{t("privacypolicy.title")}</h1>
            <p className="mb-4">{t("privacypolicy.lastupdated", {date: '30 June 2025'})}</p>
            <p className="mb-4">{t("privacypolicy.oauth")}</p>
            <p className="mb-4">{t("privacypolicy.dataUsage")}</p>
            <p className="mb-4">{t("privacypolicy.dataProtection")}</p>
            <p className="mb-4">{t("privacypolicy.contact", {email: 'mej327@lehigh.edu'})}</p>
            <p className="mb-4">Note: The English version of these statements is most accurate. Other versions may contain minor errors.</p>
        </div>
    );
}