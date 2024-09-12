import React, { useState } from 'react';
import './ButtonSection.css'; // Adjust the path based on your project structure

const ButtonSection = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  // Toggles for dropdowns
  const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen1);
  const toggleDropdown2 = () => setIsDropdownOpen2(!isDropdownOpen2);
  const toggleDropdown3 = () => setIsDropdownOpen3(!isDropdownOpen3);

  return (
    <div className="button-section flex flex-col md:flex-row justify-around p-4">
      
      {/* Personal Solutions Dropdown */}
      <div className="relative">
        <button 
          type="button" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={toggleDropdown1}>
          Personal Solutions
        </button>
        {isDropdownOpen1 && (
          <div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2 z-10">
            <ul className="list-disc pl-5">
              <li><a href="/SelfDiscovery">Self Discovery</a></li>
              <li><a href="/CVProfileServices">CV & Profile Services</a></li>
              <li><a href="/CareerCounseling">Career Counseling</a></li>
              <li><a href="/JobSupportServices">Job Support Services</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* Social Services Dropdown */}
      <div className="relative">
        <button 
          type="button" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={toggleDropdown2}>
          Social Services
        </button>
        {isDropdownOpen2 && (
          <div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2 z-10">
            <ul className="list-disc pl-5">
              <li><a href="../sanjeeda">Sanjeeda</a></li>
              <li><a href="../open">OPEN</a></li>
              <li><a href="../flux">Flux</a></li>
              <li><a href="../foreign-investor-support">Foreign Investor Support</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* Business Solutions Dropdown */}
      <div className="relative">
        <button 
          type="button" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={toggleDropdown3}>
          Business Solutions
        </button>
        {isDropdownOpen3 && (
          <div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2 z-10">
            <ul className="list-disc pl-5">
              <li><a href="/hr-management">HR Services</a></li>
              <li><a href="/research-frameworks">Research & Frameworks</a></li>
              <li><a href="/business-consulting">Business Consulting</a></li>
            </ul>
          </div>
        )}
      </div>

    </div>
  );
};

export default ButtonSection;


// import React, { useState } from 'react';import { Link } from 'react-router-dom';
// import '../components/ButtonSection.css';
// import '../components/Personal Solutions/SelfDiscovery';

// const ButtonSection = () => {
// const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
// const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
// const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

// const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen1);
// const toggleDropdown2 = () => setIsDropdownOpen2(!isDropdownOpen2);
// const toggleDropdown3 = () => setIsDropdownOpen3(!isDropdownOpen3);

// return (
// <div className="button-section flex flex-col md:flex-row justify-around p-4">
      
// <div className="relative">
// <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"onClick={toggleDropdown1}> Personal Solutions</button>
// {isDropdownOpen1 && (
// <div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2">
// <ul className="list-disc pl-5">
// <li><Link to ="/SelfDiscovery">Self Discovery</Link></li>
// <li><Link to ="/CVProfileServices">CV & Profile Services</Link></li>
// <li><Link to ="/CareerCounseling">Career Counseling</Link></li>
// <li><Link to ="/JobSupportServices">Job Support Services</Link></li>
// </ul>
// </div>
// )}</div>

/*{ 
<div className="relative">
<button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={toggleDropdown3}>Social Services</button>
{isDropdownOpen3 && (
<div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2">
<ul className="list-disc pl-5">
<li><a href="#Sanjeeda" className="block px-4 py-2 hover:bg-gray-200">Sanjeeda</a></li>
<li><a href="#OPEN" className="block px-4 py-2 hover:bg-gray-200">OPEN</a></li>
<li><a href="#Flux" className="block px-4 py-2 hover:bg-gray-200">Flux</a></li>
<li><a href="#Foreign_investor" className="block px-4 py-2 hover:bg-gray-200">Foreign Investor Support (Feasibilities & More)</a></li>
</ul>
</div>
)}</div>

<div className="relative">
<button type="button"className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={toggleDropdown3}>Business Solutions</button>
{isDropdownOpen3 && (
<div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2">
<ul className="list-disc pl-5">
<li><a href="#HR" className="block px-4 py-2 hover:bg-gray-200" >HR (Talent Mgt, OD, HR Audit, T&D)</a></li>
<li><a href="#Research" className="block px-4 py-2 hover:bg-gray-200">Research & Frameworks</a></li>
<li><a href="#Busiess" className="block px-4 py-2 hover:bg-gray-200">Business Consulting</a></li>
</ul>
</div>
)}</div>
  }  */
/*{ </div>
);
};

export default ButtonSection;} */
