import React, { useState, useEffect } from 'react';

interface AISearchProps {
  companyName: string;
}

interface CompanyInfo {
  category: string;
  items: string[];
}

const AISearch: React.FC<AISearchProps> = ({ companyName }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo[]>([]);

  useEffect(() => {
    if (companyName) {
      // 模拟 AI 搜索结果
      const mockSearch = async () => {
        const mockData: CompanyInfo[] = [
          {
            category: '年报或招股书信息',
            items: ['2022年营业收入增长20%', '净利润同比增长15%', '研发投入占比达到8%'],
          },
          {
            category: '基本信息',
            items: ['成立于2010年', '注册资本1亿元', '员工人数超过1000人'],
          },
          {
            category: '集团及关联关系',
            items: ['拥有5家子公司', '主要股东持股情况稳定', '无重大关联交易'],
          },
        ];
        setCompanyInfo(mockData);
      };
      mockSearch();
    }
  }, [companyName]);

  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium text-gray-700 mb-2">AI 搜索结果</h3>
      {companyInfo.length > 0 ? (
        companyInfo.map((info, index) => (
          <div key={index} className="mb-3">
            <h4 className="font-medium text-gray-600 mb-1">{info.category}</h4>
            <ul className="list-disc list-inside">
              {info.items.slice(0, 3).map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-500">
                  <a href="#" className="text-blue-500 hover:underline">{item}</a>
                </li>
              ))}
            </ul>
            {info.items.length > 3 && (
              <button className="text-sm text-blue-500 mt-1 hover:underline">显示更多</button>
            )}
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">请输入公司名称以获取 AI 搜索结果</p>
      )}
    </div>
  );
};

export default AISearch;