import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="p-4 bg-gray-50">{children}</div>}
    </div>
  );
};

const LogisticsRulesSummary = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">販促ツール納入ルール概要</h1>
      
      <div className="border rounded-lg overflow-hidden">
        <AccordionItem title="納入ルール">
          <ul className="list-disc pl-5">
            <li>納入時間: 9:30～12:00</li>
            <li>原則としてパレットに積載して納入</li>
            <li>「入庫事前通知書」: 納入の5営業日前までに提出</li>
            <li>「納入前チェックシート＆ドライバー情報連絡表」: 納入の1営業日前14時までに提出</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="梱包要件">
          <ul className="list-disc pl-5">
            <li>外装箱: 3辺の和が120cm未満、重量20kg未満</li>
            <li>外装箱の側面4面に記載必要事項:
              <ul className="list-circle pl-5">
                <li>ツール名称</li>
                <li>ツールコード</li>
                <li>バーコード</li>
                <li>入数</li>
              </ul>
            </li>
            <li>同一アイテムは全て同じ荷姿で納品</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="パレット積み付け">
          <ul className="list-disc pl-5">
            <li>パレットサイズからはみ出さない</li>
            <li>高さ上限:
              <ul className="list-circle pl-5">
                <li>プラスチックパレット: 1,500mm</li>
                <li>木製パレット: 1,350mm</li>
              </ul>
            </li>
            <li>ストレッチフィルムでパレット底面からアイテム全体を固定</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="注意事項">
          <ul className="list-disc pl-5">
            <li>取扱不可アイテム: 金券、動植物、生鮮食料品、瓶入り品など</li>
            <li>食品、液体、準危険物等は事前承認が必要</li>
            <li>ツールコードは販促ツールサポートデスクから付与</li>
            <li>増刷時は必ず初回納入時と同様の梱包形態で納入</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="その他">
          <ul className="list-disc pl-5">
            <li>直接ドコモショップや代理店へ送付する場合: 515mm×395mm×300mm以内の外装箱で送付</li>
            <li>問い合わせ: ドコモ作成主管組織の担当者へ連絡</li>
          </ul>
        </AccordionItem>
      </div>

      <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
        <p className="font-semibold text-center">
          これらの規則を遵守し、スムーズな納入プロセスにご協力ください。<br/>
          規約に従わない場合、納入が受け付けられない可能性があります。
        </p>
      </div>
    </div>
  );
};

export default LogisticsRulesSummary;