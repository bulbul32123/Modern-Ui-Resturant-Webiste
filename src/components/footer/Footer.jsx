import React from 'react';
import { Img } from '../../Img';
import { footerLinks, socail_media } from '../../utils/data';

export default function Footer() {
  return (
    <footer className="text-gray-900">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div>
            <Img src="/images/Logo.png" alt="Logo" className='h-8 imgSelect' />
          </div>
          <p className="mt-2 text-sm text-gray-500">Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {footerLinks.map((link) => (
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={link.id}>
              <h2 className=" font-medium text-black tracking-widest text-sm mb-3">{link.title}</h2>
              <nav className="list-none mb-10">
                {link.links.map((links, index) => (
                  <li key={index}>
                    <a className="cursor-pointer text-gray-600">{links}</a>
                  </li>
                ))
                }
              </nav>
            </div>
          ))
          }
        </div>
      </div>

      <div>
        <div className="container mx-auto py-4 px-5 flex flexStart h-full w-full flex-wrap sm:flex-row">
          <span className="inline-flex   sm:mt-0 mt-2 justify-center sm:justify-end">
            {socail_media.map((item) => (
              <a className="text-gray-400 flex gap-4" key={item.id}>
                {item.socail_icon.map((icon, index) => <span key={index}>{icon}</span>)}
              </a>
            ))
            }
          </span>
          <div className="ml-40">
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">Copyright  2024 Dscode | All rights reserved</a>
          </div>

        </div>
      </div>
    </footer>
  )
}
