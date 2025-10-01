// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="prose mx-auto p-6">
      <h1>About</h1>
      <p>
        Our app helps you take control of your financial data. Many banks in
        North America provide statements only in PDF format, which makes it
        difficult to work with the data in spreadsheets or accounting tools.
      </p>
      <p>
        We solve this by securely reading your PDF bank statements and
        converting them into clean, structured CSV files. This allows you to
        easily analyze your transactions, build reports, or import the data into
        your favorite financial software.
      </p>
      <p>
        We focus on supporting major North American banks first, and we are
        continuously expanding our coverage. Our mission is to make your
        financial information more accessible, portable, and useful.
      </p>
      <p>
        With a simple upload-and-convert process, you save time and avoid manual
        data entry, so you can focus on what really matters.
      </p>
    </main>
  );
}
