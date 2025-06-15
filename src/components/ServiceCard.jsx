import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, inView, delay }) => (
  <div className={`bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-900 flex flex-col items-center text-center card-hover-effect ${inView ? `animate-in delay-${delay}` : ''}`}>
    <Icon className="w-16 h-16 text-blue-400 mb-6 glow-effect" />
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-blue-100 leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;
