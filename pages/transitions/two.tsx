import React from 'react';
import shiftTransition from '@lib/shiftTransition';
import Link from 'next/link';

const PageTwo = () => {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-4xl">Welcome to Page Two</h1>

      <Link passHref href="/transitions">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default shiftTransition(PageTwo);
