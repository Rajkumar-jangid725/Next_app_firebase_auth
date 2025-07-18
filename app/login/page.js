// // 'use client';

// // import { useState } from 'react';
// // import { signInWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from '../../lib/firebase';
// // import { useRouter } from 'next/navigation';

// // export default function LoginPage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const router = useRouter();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       router.push('/dashboard');
// //     } catch (err) {
// //       alert(err.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// //       <form
// //         onSubmit={handleLogin}
// //         className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
// //       >
// //         <h1 className="text-2xl font-bold text-center">Login</h1>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="w-full p-2 border rounded"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="w-full p-2 border rounded"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
// //         >
// //           Log In
// //         </button>
// //         <p className="text-sm text-center">
// //           Don&apos;t have an account?{' '}
// //           <a href="/register" className="text-blue-600 hover:underline">
// //             Register
// //           </a>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }



// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../lib/firebase';
// import {
//   loginWithProvider,
//   loginAnonymously,
//   loginWithPhone,
//   createRecaptcha,
// } from '../../lib/socialProviders';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [otp, setOtp] = useState('');
//   const router = useRouter();

//   const handleEmailLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push('/dashboard');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleProviderLogin = async (provider) => {
//     try {
//       await loginWithProvider(provider);
//       router.push('/dashboard');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleAnonymous = async () => {
//     try {
//       await loginAnonymously();
//       router.push('/dashboard');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handlePhoneLogin = async () => {
//     try {
//       createRecaptcha();
//       const result = await loginWithPhone(phoneNumber, window.recaptchaVerifier);
//       setConfirmationResult(result);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       await confirmationResult.confirm(otp);
//       router.push('/dashboard');
//     } catch (err) {
//       alert('Invalid OTP');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleEmailLogin}
//         className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
//       >
//         <h1 className="text-2xl font-bold text-center">Login</h1>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Log In
//         </button>

//         <hr className="my-4" />

//         <button
//           type="button"
//           onClick={() => handleProviderLogin('google')}
//           className="w-full bg-red-500 text-white p-2 rounded"
//         >
//           Sign in with Google
//         </button>
//         <button
//           type="button"
//           onClick={() => handleProviderLogin('facebook')}
//           className="w-full bg-blue-800 text-white p-2 rounded"
//         >
//           Sign in with Facebook
//         </button>
//         <button
//           type="button"
//           onClick={() => handleProviderLogin('twitter')}
//           className="w-full bg-sky-600 text-white p-2 rounded"
//         >
//           Sign in with Twitter
//         </button>
//         <button
//           type="button"
//           onClick={() => handleProviderLogin('microsoft')}
//           className="w-full bg-gray-700 text-white p-2 rounded"
//         >
//           Sign in with Microsoft
//         </button>
//         <button
//           type="button"
//           onClick={handleAnonymous}
//           className="w-full bg-gray-400 text-white p-2 rounded"
//         >
//           Continue as Guest (Anonymous)
//         </button>

//         <div className="mt-4">
//           <input
//             type="tel"
//             placeholder="Phone number"
//             className="w-full p-2 border rounded mb-2"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={handlePhoneLogin}
//             className="w-full bg-yellow-500 text-white p-2 rounded"
//           >
//             Send OTP
//           </button>
//         </div>

//         {confirmationResult && (
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full p-2 border rounded mb-2"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={verifyOtp}
//               className="w-full bg-green-600 text-white p-2 rounded"
//             >
//               Verify OTP
//             </button>
//           </div>
//         )}

//         <div id="recaptcha-container"></div>

//         <p className="text-sm text-center">
//           Don&apos;t have an account?{' '}
//           <a href="/register" className="text-blue-600 hover:underline">
//             Register
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebase';
import SocialLoginButtons from '../../components/SocialLoginButtons';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleEmailLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>

        <hr className="my-4" />

        {/* Social and Phone login buttons */}
        <SocialLoginButtons />

        <p className="text-sm text-center mt-4">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
