import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AS FASHIONS | Luxury Fashion & Home Living Mall",
  description: "The Complete Indian Family Mall Powered by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fafafb] text-neutral-900 antialiased selection:bg-[#ff3f6c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
