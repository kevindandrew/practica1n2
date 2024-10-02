import React from 'react';
import TeamDescription from './TeamDescription';
import TeamMember from './TeamMember';

const Team = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col sm:flex-row sm:space-x-96 mb-28">
        <h2 className="text-4xl font-bold">The creative crew</h2>
        <TeamDescription />
      </div>
      <TeamMember />
    </section>
  );
};

export default Team;
