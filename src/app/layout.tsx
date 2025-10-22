import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ari Marine Portfolio Website",
    description: "Portfolio of full-stack development work",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
