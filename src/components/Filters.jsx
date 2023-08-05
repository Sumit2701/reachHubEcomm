import DropdownButton from './DropdownButton';
import filter from './Assets/filter.svg'
import Image from 'next/image';

function Filters() {

    return (
      <div>
        {/* Navbar */}
        <nav className="bg-white   flex justify-between items-center w-11/12 font-sans mt-16	 mx-auto">
          <div className="flex justify-center items-center">
          <DropdownButton text="Headphone Type" />
          <DropdownButton text="Price" />
          <DropdownButton text="Review" />
          <DropdownButton text="Color" />
          <DropdownButton text="Material" />
          <a href="Sort" className="hover:text-gray-300 px-2">
              <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center">
                All Filters
                <Image src={filter} className="ml-2" width="12px" alt="down" />
              </button>
            </a>


          </div>
          
          <div className="flex items-center space-x-12">
          <DropdownButton text="Sort" />

          </div>
        </nav>
      </div>
    );
}

export default Filters;