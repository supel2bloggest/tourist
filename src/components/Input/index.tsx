interface Props {
  label: string;
  id: string;
  type: "text" | "password";
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
}

export default function Input({
  label,
  id,
  placeholder,
  type,
  onChange,
  value,
}: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-text_primary"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
