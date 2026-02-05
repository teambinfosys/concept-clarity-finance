import "./globals.css";

export const metadata = {
  title: "Finance Concept Clarity",
  description: "Understand finance & accounting concepts easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">
        {children}
      </body>
    </html>
  );
}
