import HeaderAuth from "@/components/header-auth";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
      
          <main className="min-h-screen">
            <div className="">
             <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    {/* <Link href={"/"}>Appointment scheudler</Link> */}
                    
                  </div>
                  {<HeaderAuth />}
                </div>
              </nav> 
              <div className="">
                {children}
                <Toaster />
              </div>

              
            </div>
          </main>
      </body>
    </html>
  );
}
