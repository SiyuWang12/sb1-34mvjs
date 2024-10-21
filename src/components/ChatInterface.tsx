import React, { useState } from 'react';
import { Send, Plus } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [dataSources, setDataSources] = useState<string[]>([]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // 模拟 AI 回复
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: '这是一个模拟的 AI 回复。实际实现时，这里将调用大模型 API。', isUser: false },
        ]);
      }, 1000);
      setInput('');
    }
  };

  const handleAddDataSource = () => {
    const newSource = prompt('请输入新的数据源URL');
    if (newSource) {
      setDataSources([...dataSources, newSource]);
    }
  };

  return (
    <div className="border rounded-md h-full flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">实时问答系统</h3>
        <div className="mt-2">
          <h4 className="text-sm font-medium mb-1">数据源：</h4>
          <ul className="text-sm text-gray-600">
            {dataSources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
          <button
            onClick={handleAddDataSource}
            className="mt-2 flex items-center text-sm text-blue-500 hover:underline"
          >
            <Plus size={16} className="mr-1" />
            添加数据源
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.isUser ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t p-2 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-md"
          placeholder="输入问题..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md"
          onClick={handleSend}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;