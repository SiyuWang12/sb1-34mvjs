import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface CompanyInputProps {
  onCompanySelect: (company: string) => void;
}

const CompanyInput: React.FC<CompanyInputProps> = ({ onCompanySelect }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    // 模拟公司名称自动补全
    if (value) {
      setSuggestions([`${value}科技股份有限公司`, `${value}集团有限公司`]);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (company: string) => {
    setInput(company);
    setSuggestions([]);
    onCompanySelect(company);
  };

  return (
    <div className="mb-4">
      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
        公司名称
      </label>
      <div className="relative">
        <input
          type="text"
          id="company"
          className="w-full p-2 border rounded-md"
          value={input}
          onChange={handleInputChange}
          placeholder="输入公司名称"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" />
      </div>
      {suggestions.length > 0 && (
        <ul className="mt-1 border rounded-md bg-white shadow-sm">
          {suggestions.map((company, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(company)}
            >
              {company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompanyInput;