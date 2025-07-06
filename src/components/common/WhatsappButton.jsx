import React from 'react';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/254790775978?text=Hi%20Lorine%2C%20I%20would%20like%20to%20chat%20with%20ByteHub!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg animate-pulse hover:scale-110 transition-transform duration-200 group"
      title="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-9 h-9 text-white"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.18A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.65 1.29 1.25-4.52-.25-.4A9.47 9.47 0 016.5 15c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm5.13-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.62-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3.01.15.2 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
};

export default WhatsappButton;
