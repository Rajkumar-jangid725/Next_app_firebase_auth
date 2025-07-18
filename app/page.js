// 'use client';

// import { useAuth } from '../context/AuthContext';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading && user) {
//       router.push('/dashboard');
//     }
//   }, [user, loading]);

//   return (
//     <main className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-6">
//       <h1 className="text-4xl font-bold mb-4">Next.js + Firebase Auth</h1>
//       <p className="text-lg mb-6">Simple auth app using Firebase Authentication</p>
//       <div className="space-x-4">
//         <a
//           href="/login"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </a>
//         <a
//           href="/register"
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Register
//         </a>
//       </div>
//     </main>
//   );
// }

'use client';

import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading]);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Next.js + Firebase Auth</h1>
      <p className="text-lg mb-6">Secure login with Email, Social, or Phone</p>
      <div className="space-x-4">
        <a
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </a>
        <a
          href="/register"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Register
        </a>
      </div>
    </main>
  );
}
