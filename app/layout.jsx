// app/layout.jsx
export const metadata = {
  title: 'OtterlyFocused',
  description: 'Track your study time, compete with friends, and get study feedback.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "'Baloo 2', cursive" }}>
        {children}
      </body>
    </html>
  );
}