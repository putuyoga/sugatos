interface PetSideMenuProps {
  pets: any[];
}
export default function PetSideMenu(props: PetSideMenuProps) {
  return (
    <aside className="w-64 h-full mr-2" aria-label="Sidebar">
      <ul className="space-y-2">
        {props.pets.map((pet) => (
          <PetSideMenuItem key={pet.id} {...pet} />
        ))}
      </ul>
    </aside>
  );
}

interface PetSideMenuItemProps {
  name: string;
}
function PetSideMenuItem(props: PetSideMenuItemProps) {
  return (
    <li>
      <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
        <svg
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">{props.name}</span>
      </a>
    </li>
  );
}
