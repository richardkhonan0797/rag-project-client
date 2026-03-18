import React from 'react'
import { SignUp } from '@clerk/nextjs';

function SignUpPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  )
}

export default SignUpPage;
