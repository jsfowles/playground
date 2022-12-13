import React from 'react';
import shiftTransition from '@lib/shiftTransition';
import Link from 'next/link';

const PageOne = () => {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-4xl">Welcome to Page One</h1>

      <Link passHref href="/transitions">
        Home
      </Link>
    </div>
  );
};

export default shiftTransition(PageOne);
