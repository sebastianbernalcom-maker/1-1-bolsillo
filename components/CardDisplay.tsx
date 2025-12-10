import React from 'react';
import { CardData, Category } from '../types';
import { 
  ClipboardList, 
  BookOpen, 
  FileText, 
  HeartHandshake, 
  Brain, 
  Gift, 
  BrickWall, 
  AlertTriangle, 
  Ban, 
  ShieldAlert, 
  Scale, 
  Target, 
  ArrowRightCircle, 
  HelpCircle,
  LucideIcon
} from 'lucide-react';

interface CardDisplayProps {
  card: CardData;
  onNext: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  ClipboardList, BookOpen, FileText, HeartHandshake, Brain, Gift, BrickWall,
  AlertTriangle, Ban, ShieldAlert, Scale, Target, ArrowRightCircle, HelpCircle
};

const getCategoryStyles = (category: Category) => {
  switch (category) {
    case 'checklist':
      return {
        border: 'border-blue-200',
        bg: 'bg-blue-50',
        text: 'text-bni-navy',
        iconColor: 'text-blue-600',
        label: 'Verificação Logística'
      };
    case 'mindset':
      return {
        border: 'border-yellow-200',
        bg: 'bg-yellow-50',
        text: 'text-bni-navy',
        iconColor: 'text-bni-gold',
        label: 'Mentalidade Givers Gain'
      };
    case 'warning':
      return {
        border: 'border-red-200',
        bg: 'bg-red-50',
        text: 'text-red-900',
        iconColor: 'text-bni-red',
        label: 'Alerta de Mito'
      };
    case 'strategy':
      return {
        border: 'border-emerald-200',
        bg: 'bg-emerald-50',
        text: 'text-emerald-900',
        iconColor: 'text-emerald-600',
        label: 'Estratégia de Reunião'
      };
    default:
      return {
        border: 'border-gray-200',
        bg: 'bg-white',
        text: 'text-gray-800',
        iconColor: 'text-gray-600',
        label: 'Conselho'
      };
  }
};

export const CardDisplay: React.FC<CardDisplayProps> = ({ card, onNext }) => {
  const styles = getCategoryStyles(card.category);
  const IconComponent = iconMap[card.iconName] || HelpCircle;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-md mx-auto p-4 animate-fade-in">
      
      {/* Category Label */}
      <div className={`mb-4 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${styles.bg} ${styles.text} border ${styles.border}`}>
        {styles.label}
      </div>

      {/* Card Body */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full flex flex-col items-center text-center relative overflow-hidden">
        {/* Decorative Top Bar */}
        <div className={`absolute top-0 left-0 w-full h-2 ${styles.iconColor.replace('text-', 'bg-')}`}></div>

        <div className={`mb-6 p-4 rounded-full ${styles.bg}`}>
          <IconComponent size={48} className={styles.iconColor} />
        </div>

        <h2 className="text-2xl font-serif font-bold text-bni-navy mb-4">
          {card.title}
        </h2>

        <div className="text-lg text-gray-600 leading-relaxed font-medium">
          "{card.text}"
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onNext}
        className="mt-8 bg-bni-navy hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition active:scale-95 flex items-center gap-2 group w-full justify-center"
      >
        <span>🔄 Próximo Conselho</span>
      </button>

       <p className="mt-4 text-xs text-gray-400">Baseado em "A Arte do Um-a-Um"</p>
    </div>
  );
};