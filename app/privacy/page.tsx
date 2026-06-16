import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dennis Gitau',
  description: 'How this website collects, uses, and protects your information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: June 15, 2026</p>

      <h2>1. Introduction</h2>
      <p>Welcome to Dennis Gitau’s personal blog. I’m a web developer based in Nairobi, Kenya. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit this Site.</p>

      <h2>2. Information I Collect</h2>
      <p><strong>Personal Information:</strong> I collect name and email address only when you voluntarily contact me.</p>
      <p><strong>Automatically Collected Information:</strong> IP address, browser type, device information, pages visited, and time spent on the site (via analytics and advertising tools).</p>

      <h2>3. How I Use Your Information</h2>
      <p>I use this information to respond to your inquiries, improve the website, analyze traffic, and display relevant advertisements through Google AdSense.</p>

      <h2>4. Advertising</h2>
      <p>This website uses <strong>Google AdSense</strong>. Google may use cookies to serve ads based on your interests. You can view and manage your ad preferences in your <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>

      <h2>5. Third-Party Services</h2>
      <p>I use the following services:</p>
      <ul>
        <li>Vercel – Website hosting and deployment</li>
        <li>Google AdSense – Advertising</li>
        <li>Google Analytics – Site analytics (if enabled)</li>
      </ul>

      <h2>6. Data Sharing</h2>
      <p>I do not sell your personal data. Information may be shared only with trusted service providers or when required by law.</p>

      <h2>7. Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact me at hello@dennisgitau.dev.</p>

      <h2>8. Contact</h2>
      <p>If you have any questions about this Privacy Policy, feel free to reach out at: <strong>hello@dennisgitau.dev</strong></p>
    </div>
  );
}
