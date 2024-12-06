'use client'
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
  return (
    <UserButton appearance={{
        elements: {
            avatarBox: {
                width: 40,
                height: 40
            }
        }

    }
    }>
        {/* included dashboard on the menu of the clerk */}
        <UserButton.MenuItems>
        <UserButton.Link label='Dashboard' labelIcon={<ChartNoAxesGantt size={20} />  } href='/dashboard'/>
        {/* push dashboARD ON THE TOP */}
        <UserButton.Action label='manageAccount'/>  

        </UserButton.MenuItems>

    </UserButton>
  )
}

export default UserMenu
