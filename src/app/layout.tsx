import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ari Marine Portfolio Website",
    description: "Portfolio of full-stack development work",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="apple-mobile-web-app-title" content="Ari" />
            </head>
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
