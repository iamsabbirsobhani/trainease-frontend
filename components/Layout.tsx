import { useState } from 'react';
import Navbar from './Navbar/DesktopNav/components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
