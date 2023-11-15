import { React, useContext,useRef, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { RiArrowDropDownFill, RiLogoutCircleLine, RiAccountCircleLine} from 'react-icons/ri';
import { AuthContext } from 'src/context/AuthContext';
import useOnHoverOutside from 'src/hooks/useOnHoverOutside';

const UserProfile = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
      setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  const LOGOUT_USER_MUTATION = gql`
    mutation logout(
      $id: ID!
    ) {
      logoutUser(
        id: $id
      ) {
        name
        email
        token
    }
    }
  `;

  const [logoutUser, {loading}] = useMutation(LOGOUT_USER_MUTATION, {
    update(cache, {data: {logoutUser: userData}}) {
      context.logout();
      navigate('/login');
    },
    onError(err) {
      console.error(err);
      // setErrorMsg(err);
    },
    variables: {id: context.user?.id}
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      logoutUser();
    } catch (error) {
      setErrorMsg('Un error ha ociurrido');
      console.error(error);
    }
  };

  if (!context.user) return null;

  return (
    <div ref={dropdownRef}>
      <a href="#" className="flex items-center gap-1 text-gray-500" id="menu-button" onMouseOver={() => setMenuDropDownOpen(true)}>
        { context.user.name } 
        <RiArrowDropDownFill className="text-2xl"/>
      </a>
      {
        isMenuDropDownOpen && 
          <div className="absolute right-0 z-10 mt-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-0">
                <RiAccountCircleLine className="inline-block mr-2"/>
                Cuenta
              </a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={handleSubmit}>
                <RiLogoutCircleLine className="inline-block mr-2"/>
                Cerrar Sesión
              </a>
            </div>
          </div>
      }
    </div>
  );
}

export default UserProfile;
