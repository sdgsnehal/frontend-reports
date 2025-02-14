import { Button } from "@headlessui/react";
interface ButtonElementProps {
  text: string | null | undefined;
  disabled?: boolean;
  onClick?: () => void;
}
export default function ButtonElement({
  text,
  onClick,
  disabled,
}: ButtonElementProps) {
  return (
    <Button
      className="block  items-center gap-2 rounded-md bg-gray-700 py-2 px-4 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mt-3"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
