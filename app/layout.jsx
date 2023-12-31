import "@/styles/globals.css";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const NotoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata = {
  title: "Vintazk",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={(NotoSans.className, "!scroll-smooth")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
