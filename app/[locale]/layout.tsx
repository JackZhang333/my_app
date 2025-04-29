import type { Metadata } from "next";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bone divination for fortune-telling",
  description: "A fortune-telling app based on Chinese traditional bone divination",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
    
      <body className="bg-[#F8EEDE] ">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

