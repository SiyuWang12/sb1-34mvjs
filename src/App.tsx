import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CompanyInput from './components/CompanyInput';
import FileUpload from './components/FileUpload';
import TemplateSelection from './components/TemplateSelection';
import ReportEditor from './components/ReportEditor';
import AISearch from './components/AISearch';
import ChatInterface from './components/ChatInterface';

function App() {
  const [companyName, setCompanyName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [reportContent, setReportContent] = useState('');

  const handleGenerateReport = () => {
    // 这里添加生成报告的逻辑
    console.log('生成报告');
  };

  const handleDownloadReport = () => {
    // 这里添加下载报告的逻辑
    console.log('下载报告');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">授信报告助手</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <CompanyInput onCompanySelect={setCompanyName} />
            <FileUpload />
            <TemplateSelection onTemplateSelect={setSelectedTemplate} />
            <AISearch companyName={companyName} />
            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleGenerateReport}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                一键生成报告
              </button>
              <button
                onClick={handleDownloadReport}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                下载报告
              </button>
            </div>
            <ReportEditor
              content={reportContent}
              onContentChange={setReportContent}
              template={selectedTemplate}
            />
          </div>
          <div>
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;