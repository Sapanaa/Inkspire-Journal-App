import Link from 'next/link'
import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { Great_Vibes } from "next/font/google";
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { FolderOpen, PenBox } from 'lucide-react';
import UserMenu from "../components/user-menu"
import {checkUser} from "../lib/checkUser"

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"], // Use weights as needed
  });

  const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"], // Great Vibes only has 400 weight
  });
const Header = async () => {
  await checkUser();
  return (
    <header className='container mx-auto'>
        <nav className='flex items-center justify-between py-4'>
            <Link href="/"><h1 className={`${greatVibes.className} text-3xl font-bold text-orange-800 `}>Inkspire</h1></Link>
            <div className='flex items-center gap-5'>
            <SignedIn >
            <Link href="/dashbord#collections" >
            <Button variant={"outline"} className={dancingScript.className}>
              <FolderOpen className="mr-2 h-4 w-4" />
             
             <span className='hidden md:inline'> Collections</span></Button></Link>
            </SignedIn>

            <Link href="/journal/write" >
            <Button variant={"journal"} className={dancingScript.className}>
              <PenBox className="mr-2 h-4 w-4" />
             
             <span className='hidden md:inline'>Write New</span></Button></Link>
                <SignedOut>
                    <SignInButton forceRedirectUrl={"/dashboard"}>
                      <Button variant={"outline"} className={greatVibes.className}>Sign In</Button>
                    </SignInButton>
                </SignedOut>

    <SignedIn>
    <UserMenu/>
    </SignedIn>
            </div>
        </nav>
      
    </header>
  )
}

export default Header
