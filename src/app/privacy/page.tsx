export default function PrivacyPolicyPage() {
  const date = new Date();
  return (
    <main className="prose mx-auto p-6">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {date.toDateString()}
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Account Information:</strong> When you sign in with Google, we
          collect your name, email address, and profile picture.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect basic analytics (e.g.,
          number of files converted, features used).
        </li>
        <li>
          <strong>Uploaded Files:</strong> Files you upload (such as bank
          statements) are processed only to provide the conversion service. We
          do not share them with third parties.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and improve our services.</li>
        <li>
          Manage your account (tokens, purchase history, converted documents).
        </li>
        <li>Communicate important updates about the service.</li>
      </ul>

      <h2>3. Data Retention</h2>
      <ul>
        <li>
          Uploaded files are stored only as long as needed for conversion, then
          deleted.
        </li>
        <li>
          Account-related data (name, email, history) is retained while your
          account is active.
        </li>
      </ul>

      <h2>4. Sharing of Information</h2>
      <p>
        We <strong>do not sell your data</strong>. Information may only be
        shared with service providers we use for hosting, authentication, or
        payments (e.g., Google, Stripe).
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You may request deletion of your account and associated data at any time
        by contacting us at <a href="mailto:[your email]">[your email]</a>.
      </p>

      <h2>6. Security</h2>
      <p>
        We take reasonable steps to protect your information, but no system is
        completely secure.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If significant
        changes are made, we’ll notify you through the app or by email.
      </p>
    </main>
  );
}
