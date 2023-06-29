import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cars-Frontend-code-test",
  description: "Cars-Frontend-code-test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
