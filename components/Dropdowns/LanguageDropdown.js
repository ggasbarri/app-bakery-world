import React from "react";
import { useTranslation } from "next-i18next";
import { createPopper } from "@popperjs/core";

const LanguageDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const { t, i18n } = useTranslation(["navbar"]);

  return (
    <>
      <div className="relative">
        {/* <!-- Dropdown toggle button --> */}
        <button
          className="bg-transparent text-white active:bg-blueGray-50 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          type="button"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          {t("navbar:language")} <i />
        </button>
        {/* <!-- Dropdown list --> */}
        <ul
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "absolute right-0 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl w-44"
          }
        >
          <a
            href="/en"
            className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              i18n.changeLanguage("en");
              closeDropdownPopover();
            }}
          >
            English
          </a>
          <a
            href="/es"
            className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              i18n.changeLanguage("es");
              closeDropdownPopover();
            }}
          >
            Español
          </a>
        </ul>
      </div>
    </>
  );
};

export default LanguageDropdown;
