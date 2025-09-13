export const metadata = {
  title: 'OtterlyFocused',
  description: 'Track your study time and compete with friends',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}