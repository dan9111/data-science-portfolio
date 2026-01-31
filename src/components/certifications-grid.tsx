import Image from "next/image";
import Link from "next/link";

interface CertificationData {
    title: string;
    issuer: string;
    description: string;
    issuedDate: string;
    credentialLink: string;
    logo: string;
    accentColor: string;
}

const certifications: CertificationData[] = [
    {
        title: "IBM Data Science Professional Certificate",
        issuer: "IBM",
        description: "Developed hands-on skills in Data Science and Machine Learning including Python, SQL, Data Visualization, and predictive modeling.",
        issuedDate: "Jan 2026",
        credentialLink: "https://www.coursera.org/account/accomplishments/professional-cert/4VDR0GAWF6XF",
        logo: "/logo/IBM_logo.svg",
        accentColor: "blue",
    },
];

const colorClasses: Record<string, { bg: string; bgHover: string; text: string; borderHover: string }> = {
    blue: {
        bg: "bg-blue-400/10",
        bgHover: "group-hover:bg-blue-400/20",
        text: "text-blue-400",
        borderHover: "hover:border-blue-400/50",
    },
    yellow: {
        bg: "bg-yellow-400/10",
        bgHover: "group-hover:bg-yellow-400/20",
        text: "text-yellow-400",
        borderHover: "hover:border-yellow-400/50",
    },
    purple: {
        bg: "bg-purple-400/10",
        bgHover: "group-hover:bg-purple-400/20",
        text: "text-purple-400",
        borderHover: "hover:border-purple-400/50",
    },
    green: {
        bg: "bg-green-400/10",
        bgHover: "group-hover:bg-green-400/20",
        text: "text-green-400",
        borderHover: "hover:border-green-400/50",
    },
    orange: {
        bg: "bg-orange-400/10",
        bgHover: "group-hover:bg-orange-400/20",
        text: "text-orange-400",
        borderHover: "hover:border-orange-400/50",
    },
};

export function CertificationsGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
                const colors = colorClasses[cert.accentColor] || colorClasses.blue;
                return (
                    <div
                        key={index}
                        className={`bg-card p-6 rounded-lg border border-border flex flex-col gap-4 transition-colors group ${colors.borderHover}`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-full bg-gray-100 transition-colors shrink-0`}>
                                <Image
                                    src={cert.logo}
                                    alt={cert.issuer}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground font-bold text-sm leading-tight">{cert.title}</h4>
                                <p className="text-primary text-xs mt-1">{cert.issuer}</p>
                                <p className="text-muted-foreground text-xs mt-1">{cert.issuedDate}</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {cert.description}
                        </p>
                        <Link
                            href={cert.credentialLink}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-auto"
                        >
                            View Credential <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
