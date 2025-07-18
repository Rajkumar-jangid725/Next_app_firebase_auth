'use client';

import { useRouter } from 'next/navigation';
import {
  loginWithProvider,
} from '../lib/socialProviders';

export default function SocialLoginButtons() {
  const router = useRouter();

  const handleProvider = async (provider) => {
    try {
      await loginWithProvider(provider);
      router.push('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="space-y-2 mt-4">
      <button
        onClick={() => handleProvider('google')}
        className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
      >
        Sign in with Google
      </button>

      <div id="recaptcha-container" className="mt-2" />
    </div>
  );
}
