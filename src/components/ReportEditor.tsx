import React from 'react';

interface ReportEditorProps {
  content: string;
  onContentChange: (content: string) => void;
  template: string;
}

const ReportEditor: React.FC<ReportEditorProps> = ({ content, onContentChange, template }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">报告编辑</label>
      <textarea
        className="w-full p-2 border rounded-md h-64"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="在此编辑报告内容..."
      />
      <div className="mt-2 text-sm text-gray-500">
        已选择模板: {template || '未选择'}
      </div>
    </div>
  );
};

export default ReportEditor;