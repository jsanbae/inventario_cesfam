import React from 'react';
import MainSearchComponent from 'src/components/MainSearchComponent';
import UserProfile from 'src/components/UserProfile';

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 lg:pl-12 w-full shadow-lg">
      <MainSearchComponent />

      <nav className="w-full md:w-[70%] flex justify-center md:justify-end">
        <ul className="flex items-center font-semibold">
          <li>
            <UserProfile />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
