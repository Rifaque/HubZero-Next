'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';


type TeamMember = {
  _id: string;
  name: string;
  role: string;
  photo: string;
};

const TeamPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('https://api.hubzero.in/api/team')
      .then((res) => res.json())
      .then((data: TeamMember[]) => setTeam(data))
      .catch((err) => console.error('Error fetching team data:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {team.map((member) => (
          <div
            key={member._id}
            className="p-4 bg-white rounded-lg shadow-lg text-center"
                        >
              <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

            <h2 className="text-xl font-semibold mt-3">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
