import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function InputBox() {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-black">Name</Label>
        <Input
          className={clsx(
            "mt-3 block w-full  border-b-2 border-black/50 bg-white py-2 px-3 text-sm/6 text-black",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
          )}
        />
      </Field>
    </div>
  );
}
