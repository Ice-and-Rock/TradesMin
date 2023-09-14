

export const Footer = () => {
    return ( 
      <footer className="felx bg-gradient-to-b from-gray-600 to-gray-800 text-center text-white">
      <div className="p-3 sm:p-9 justify-center">
        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=847380014"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 hover:bg-blue-500 hover:text-white sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" 
              fill-rule="evenodd"
              clip-rule="evenodd"/>
            </svg>
          </a>
          <a
            href="https://drive.google.com/file/d/19BrsnhJ1MXez77nPEuV1weKupe-mBOxK/view?usp=sharing"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:bg-red-500 hover:text-white rounded-xl sm:h-7 sm:w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          {/* Following cahnge for email */}
          <a
            href="mailto:nicholas@valente-engineering.com"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 hover:bg-pink-500 hover:text-white rounded-xl sm:h-7 sm:w-7"
            >
              <path
                stroke-linecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-valente-electrics/"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 hover:bg-blue-500 hover:text-white sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://github.com/Ice-and-Rock"
            className="text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 hover:bg-green-700 hover:text-white rounded-xl sm:h-7 sm:w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-pink-900 text-xs p-2 sm:p-4 text-center text-gray-500 ">
        © 2023. Nick Valente
      </div>
    </footer>
  );
}

