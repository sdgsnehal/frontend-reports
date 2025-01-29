import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
interface CheckboxProps {
  onChange: (enable: boolean) => void;
}
export default function CheckboxComponent({ onChange }: CheckboxProps) {
  const [enabled, setEnabled] = useState(true);
  const handleChange = (value: boolean) => {
    setEnabled(value); 
    onChange(value);
  };

  return (
    <Checkbox
      checked={enabled}
      onChange={handleChange}
      className="group size-6 rounded-md border-1 bg-white/10 p-1 ring-1 ring-black/50 ring-inset data-[checked]:bg-white"
    >
      <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
    </Checkbox>
  );
}
