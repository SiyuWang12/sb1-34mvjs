import React from 'react';

interface TemplateSelectionProps {
  onTemplateSelect: (template: string) => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({ onTemplateSelect }) => {
  const templates = [
    { id: 'template1', name: '标准授信报告模板' },
    { id: 'template2', name: '小微企业授信报告模板' },
    { id: 'template3', name: '集团企业授信报告模板' },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">选择报告模板</label>
      <select
        className="w-full p-2 border rounded-md"
        onChange={(e) => onTemplateSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          请选择模板
        </option>
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemplateSelection;