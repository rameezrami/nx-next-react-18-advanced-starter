import './global.scss';

export const metadata = {
  title: 'Home page',
  description: 'home page description here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
