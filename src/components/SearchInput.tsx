interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

const SearchInput = ({ value, onChange, placeholder, className }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    />
  );
};

export default SearchInput;
