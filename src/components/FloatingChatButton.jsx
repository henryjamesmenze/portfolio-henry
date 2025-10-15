const FloatingChatButton = () => {
  const whatsappLink =
    "https://wa.me/573028400610?text=Hola%20Henry!";

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 md:hidden z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12a11.94 11.94 0 01-6.19-1.79L4 28l2.79-5.81A11.94 11.94 0 014 16zm12-9a9 9 0 100 18 9 9 0 000-18zm4.47 13.53c-.27.75-1.57 1.39-2.2 1.47-.59.08-1.31.11-2.11-.13a8.3 8.3 0 01-3.59-2.29 7.6 7.6 0 01-1.61-2.65c-.14-.39-.27-.94-.27-1.44s.17-1.03.39-1.41c.22-.38.48-.47.65-.47h1.12c.33 0 .49.02.7.53.21.51.72 1.75.78 1.88.06.13.1.28.02.45-.08.17-.12.27-.23.42-.11.15-.23.33-.33.44-.11.11-.23.23-.1.45.13.22.58.95 1.25 1.54.86.77 1.58 1.01 1.8 1.12.22.11.35.09.48-.05.13-.14.55-.65.7-.87.15-.22.29-.18.48-.11.19.07 1.2.57 1.41.67.21.1.35.15.4.23.05.08.05.77-.22 1.52z" />
        </svg>
        Chat
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hidden md:flex items-center justify-center z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12a11.94 11.94 0 01-6.19-1.79L4 28l2.79-5.81A11.94 11.94 0 014 16zm12-9a9 9 0 100 18 9 9 0 000-18zm4.47 13.53c-.27.75-1.57 1.39-2.2 1.47-.59.08-1.31.11-2.11-.13a8.3 8.3 0 01-3.59-2.29 7.6 7.6 0 01-1.61-2.65c-.14-.39-.27-.94-.27-1.44s.17-1.03.39-1.41c.22-.38.48-.47.65-.47h1.12c.33 0 .49.02.7.53.21.51.72 1.75.78 1.88.06.13.1.28.02.45-.08.17-.12.27-.23.42-.11.15-.23.33-.33.44-.11.11-.23.23-.1.45.13.22.58.95 1.25 1.54.86.77 1.58 1.01 1.8 1.12.22.11.35.09.48-.05.13-.14.55-.65.7-.87.15-.22.29-.18.48-.11.19.07 1.2.57 1.41.67.21.1.35.15.4.23.05.08.05.77-.22 1.52z" />
        </svg>
      </a>
    </>
  );
};

export default FloatingChatButton;