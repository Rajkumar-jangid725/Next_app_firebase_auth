import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInAnonymously,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

import { auth } from './firebase';

export const loginWithProvider = async (providerName) => {
  let provider;
  switch (providerName) {
    case 'google':
      provider = new GoogleAuthProvider();
      break;
    case 'facebook':
      provider = new FacebookAuthProvider();
      break;
    case 'twitter':
      provider = new TwitterAuthProvider();
      break;
    case 'microsoft':
      provider = new OAuthProvider('microsoft.com');
      break;
    default:
      throw new Error('Unsupported provider');
  }

  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export const loginAnonymously = async () => {
  try {
    const result = await signInAnonymously(auth);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const createRecaptcha = (containerId = 'recaptcha-container') => {
  if (typeof window === 'undefined') return;

  window.recaptchaVerifier = new RecaptchaVerifier(
    containerId,
    {
      size: 'invisible',
      callback: (response) => {
        console.log('reCAPTCHA solved');
      },
    },
    auth
  );
};

export const loginWithPhone = async (phoneNumber, appVerifier) => {
  try {
    const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    return confirmation;
  } catch (error) {
    throw error;
  }
};
