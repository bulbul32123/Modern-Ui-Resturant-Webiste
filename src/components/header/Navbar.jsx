import React from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from 'react-scroll';
import Button from '../button/Button';
import { navLinks } from '../../utils/data';
import { Img } from '../../Img';

export default function Navbar() {
    return (
        <nav className='flexBetween h-20 w-full bg-white'>
            <div className='pl-10'>
                <Img src="/images/Logo.png" alt="Logo" className='h-8 imgSelect' />
            </div>
            <div className="xmd:inline-block  hidden">
                <div className="flex gap-8">

                    {navLinks.map((link) => (
                        <Link to={link.link} key={link.id} spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer hover  flex gap-2 items-center'> {link.label} {link.arrowDown || ''}  </Link>
                    ))
                    }
                </div>
            </div>
            <div className="flex items-center gap-4 pl-6 pr-6">
                <span className='cursor-pointer hover'><RiSearch2Line size={20} /></span>
                <div className='relative cursor-pointer hover'><HiOutlineShoppingBag size={20} /> <span className='absolute -top-1 px-1 text-xs text-white -right-1 rounded-3xl bg-green-primary'>8</span></div>
                <Button style='btn_Contact' label='Contact' icon={<MdPhoneInTalk size={18} color='white' />} />
            </div>
        </nav>
    )
}
