
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'George', lastName: 'Goodluck' };
  
  return (
    <main className="flex h-screen w-full font-inter">
      SIDEBAR
      {children}
    </main>
  );
}
