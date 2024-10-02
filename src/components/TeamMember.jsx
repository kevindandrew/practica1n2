import React from 'react';
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import photo3 from '../assets/images/photo3.png';
import photo4 from '../assets/images/photo4.png';
import photo5 from '../assets/images/photo5.png';
import photo6 from '../assets/images/photo6.png';

const teamMembers = [
  {
    name: 'Bill Mahoney',
    role: 'PRODUCT OWNER',
    image: photo1,
  },
  {
    name: 'Saba Cabrera',
    role: 'ART DIRECTOR',
    image: photo2,
  },
  {
    name: 'Shae Le',
    role: 'TECH LEAD',
    image: photo3,
  },
  {
    name: 'Skylah Lu',
    role: 'UX DESIGNER',
    image: photo4,
  },
  {
    name: 'Griff Richards',
    role: 'DEVELOPER',
    image: photo5,
  },
  {
    name: 'Stan John',
    role: 'DEVELOPER',
    image: photo6,
  },
];

const TeamMember = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {teamMembers.map((member, index) => (
         <div 
         key={index} 
         className={`flex items-start 
           ${index === 1 || index === 4 ? 'lg:mt-20 lg:mb-0' : 'lg:mb-20 lg:mt-0'} 
           ${index === 0 || index === 2 || index === 4 ? 'sm:mb-20 sm:mt-0' : ''} 
           ${index === 1 || index === 3 || index === 5 ? 'sm:mt-20 sm:mb-0' : ''}`}
       >
            <div className="">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover"
              />
              <h2 className="text-xl font-bold mt-4">{member.name}</h2>
            </div>

           
              <p className="text-gray-500 rotate-90 flex-shrink-0 mt-10">
                {member.role}
              </p>
            </div>
         
        ))}
      </div>
    );
  };
  
  export default TeamMember;