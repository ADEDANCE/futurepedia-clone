import React, { useState } from 'react';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=' bg-white shadow-md'>
         <div className=' max-w-7xl mx-auto px-4'>
            <div className=' flex justify-between items-center h-16'>
                 <h1 className="text-xl font-bold text-blue-600">
                     MyWebsite
                 </h1>
            </div>
         </div>
    </nav>
  )
}

export default Navber