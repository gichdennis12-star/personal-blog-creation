import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How this website collects, uses, and protects your information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: June 15, 2026</p>

      <h2>1. Introduction</h2>
      <p>Welcome to Dennis Gitau’s personal blog. This Privacy Policy explains how I collect, use, and protect your information when you visit this site.</p>

      <h2>2. Information Collected</h2>
      <p>I collect minimal personal information — mainly what you voluntarily provide when contacting me (name and email). Automatically collected data includes IP address, browser type, device information, and usage statistics for analytics and advertising purposes.</p>

      <h2>3. How Information is Used</h2>
      <p>The information is used to respond to your messages, improve the site, analyze traffic, and serve relevant advertisements through Google AdSense.</p>

      <h2>4. Advertising</h2>
      <p>This website uses <strong>Google AdSense</strong>. Google may use cookies to serve personalized ads based on your interests. You can manage your ad preferences in your <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>

      <h2>5. Third-Party Services</h2>
      <p>I use Vercel for hosting and Google services for analytics and advertising.</p>

      <h2>6. Data Sharing</h2>
      <p>I do not sell your personal data. Information may be shared only when required by law or with trusted service providers.</p>

      <h2>7. Your Rights</h2>
      <p>You can request to access, correct, or delete your personal information by contacting me at hello@dennisgitau.dev.</p>

      <h2>8. Contact</h2>
      <p>If you have any questions, feel free to reach out at: <strong>hello@dennisgitau.dev</strong></p>
    </div>
  );
}