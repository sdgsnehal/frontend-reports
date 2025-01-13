import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export default function Example() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <div className="mx-auto w-52 pt-20">
      <Listbox value={selected} onChange={setSelected}>
        {/* Button to toggle dropdown */}
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg bg-gray-700 py-1.5 pr-8 pl-3 text-left text-sm text-white",
            "focus:outline-none focus:ring-2 focus:ring-white"
          )}
        >
          <span>{selected.name}</span>
          <ChevronDownIcon
            className="pointer-events-none absolute top-2.5 right-2.5 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </ListboxButton>

        {/* Dropdown options */}
        <ListboxOptions
          className={clsx(
            "absolute mt-1 max-h-60 w-56 overflow-auto rounded-lg bg-gray-700 text-white shadow-lg z-10",
            "focus:outline-none"
          )}
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className={({ active, selected }) =>
                clsx(
                  "cursor-pointer select-none relative py-2 pl-10 pr-4",
                  active ? "bg-gray-600 text-white" : "text-gray-300",
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
