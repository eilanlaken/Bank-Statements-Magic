// src/app/terms/page.tsx

export default function TermsPage() {
  const date = new Date();

  return (
    <main className="prose mx-auto p-6">
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Effective Date:</strong> {date.toDateString()}
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our service, you agree to be bound by these Terms
        and Conditions. If you do not agree, you must stop using the service.
      </p>

      <h2>2. Use of Service</h2>
      <ul>
        <li>You may use the service only for lawful purposes.</li>
        <li>
          You agree not to misuse the service, interfere with its operation, or
          attempt unauthorized access.
        </li>
        <li>
          We reserve the right to suspend or terminate accounts for abuse or
          violations of these Terms.
        </li>
      </ul>

      <h2>3. Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and for all activities under it. Accounts are tied to your Google login
        and must contain accurate information.
      </p>

      <h2>4. Uploaded Content</h2>
      <p>
        Files you upload (such as bank statements) are processed solely for the
        purpose of conversion. We do not claim ownership of your files, but you
        grant us temporary permission to process them as needed.
      </p>

      <h2>5. Payment and Tokens</h2>
      <p>
        Certain features may require tokens or paid plans. All purchases are
        final unless required by law.
      </p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        The service is provided as is without warranties of any kind. We do not
        guarantee accuracy, reliability, or availability of the service.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for damages
        arising from your use of the service, including data loss or
        unauthorized access.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of the service
        after changes constitutes acceptance of the new Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by the laws of [Your Country/Region]. Disputes
        will be subject to the jurisdiction of courts in [Your City/Region].
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions regarding these Terms, contact us at{" "}
        <a href="mailto:[your email]">[your email]</a>.
      </p>
    </main>
  );
}
