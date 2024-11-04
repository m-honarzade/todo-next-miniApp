import { inputProps } from "@/types";
const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-base p-4 mx-2 w-full"
      />
    </div>
  );
};

export default Input;
