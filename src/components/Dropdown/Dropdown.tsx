import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

interface DropdownProps {
  Items: { id: string | number; name: string }[];
  Light?: boolean;
  onChange: (selectedItem: { id: number | string; name: string }) => void;
  disabled?: boolean;
}

export default function Dropdown({
  Items,
  Light,
  onChange,
  disabled = false,
}: DropdownProps) {
  const [selected, setSelected] = useState(Items[0]);
  const handleSelection = (item: { id: number; name: string }) => {
    setSelected(item);
    onChange(item);
  };

  return (
    <div className=" w-52 ">
      <Listbox value={selected} onChange={handleSelection} disabled={disabled}>
        {/* Button to toggle dropdown */}
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg py-1.5 pr-8 pl-3 text-left text-sm",
            Light === true ? "bg-white text-black" : "bg-gray-700 text-white",
            "focus:outline-none focus:ring-2 focus:ring-white"
          )}
        >
          <span>{selected.name}</span>
          <ChevronDownIcon
            className={clsx(
              "pointer-events-none absolute top-2.5 right-2.5 h-5 w-5 ",
              Light === true ? "text-black" : "text-white"
            )}
            aria-hidden="true"
          />
        </ListboxButton>

        {/* Dropdown options */}
        <ListboxOptions
          className={clsx(
            "absolute mt-1 max-h-60 w-56 overflow-auto rounded-lg bg-gray-700 text-white shadow-lg z-10",
            Light === true ? "bg-white text-black" : "bg-gray-700 text-white",
            "focus:outline-none"
          )}
        >
          {Items.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className={({ active, selected }) =>
                clsx(
                  "cursor-pointer select-none relative py-2 pl-10 pr-4",
                  active ? "bg-gray-600 text-white" : "text-black",
                  selected ? "font-medium" : "font-normal"
                )
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={clsx(
                      "block truncate",
                      selected ? "font-medium" : "font-normal"
                    )}
                  >
                    {person.name}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <CheckIcon
                        className="h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                    </span>
                  ) : null}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
