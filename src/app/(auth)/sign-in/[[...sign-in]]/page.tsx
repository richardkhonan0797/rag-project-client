import React from 'react';
import { SignIn } from '@clerk/nextjs';

function SignInPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  )
}

export default SignInPage;
