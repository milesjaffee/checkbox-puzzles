'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AccountBar() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <>
          <p>Hello, {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      )}
    </div>
  );
}
