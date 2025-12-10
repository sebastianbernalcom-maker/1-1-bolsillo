import { CardData } from '../types';

export const cards: CardData[] = [
  // --- Verificação Logística (Checklist) ---
  {
    id: 1,
    category: 'checklist',
    title: 'Checklist Logístico',
    text: 'Você tem suas 2 cópias da folha Power Um-a-Um impressas e prontas? Uma para você, uma para seu parceiro.',
    iconName: 'ClipboardList'
  },
  {
    id: 2,
    category: 'checklist',
    title: 'Preparação Prévia',
    text: 'Já leu a Biografia do Membro do seu parceiro? Se não, tire 2 minutos agora para encontrar pontos em comum.',
    iconName: 'BookOpen'
  },
  {
    id: 3,
    category: 'checklist',
    title: 'Ferramenta Essencial',
    text: 'Você trouxe seu Perfil GAINS atualizado para trocar? É o mapa para encontrar sinergias.',
    iconName: 'FileText'
  },
  
  // --- Ajuste de Mentalidade (Mindset) ---
  {
    id: 4,
    category: 'mindset',
    title: 'A Equação de Ouro',
    text: 'Lembre-se: Relação Interpessoal > Comercial. Sem confiança, não há negócio duradouro.',
    iconName: 'HeartHandshake'
  },
  {
    id: 5,
    category: 'mindset',
    title: 'Seu Papel Hoje',
    text: 'Hoje seu objetivo é aprender como vender seu parceiro, não vender PARA ele. Torne-se seu melhor agente de marketing.',
    iconName: 'Brain'
  },
  {
    id: 6,
    category: 'mindset',
    title: 'Givers Gain®',
    text: 'Entre na reunião pensando: "Que porta posso abrir para esta pessoa hoje?" Dar gera receber.',
    iconName: 'Gift'
  },
  {
    id: 7,
    category: 'mindset',
    title: 'Construção de Confiança',
    text: 'Cada Um-a-Um é um tijolo na construção da confiança. E a confiança é a moeda que gera negócios duradouros.',
    iconName: 'BrickWall'
  },

  // --- Alerta de Mitos (Warning) ---
  {
    id: 8,
    category: 'warning',
    title: 'Cuidado com o Tempo!',
    text: 'Se passar mais de 10 minutos falando sobre o tempo ou futebol, já não é um 1 a 1 estratégico, é apenas um café social.',
    iconName: 'AlertTriangle'
  },
  {
    id: 9,
    category: 'warning',
    title: 'Isto NÃO é uma Venda',
    text: 'Isto não é uma visita de vendas. Não pressione. Se tentar fechar um negócio hoje, perderá a oportunidade de futuras referências.',
    iconName: 'Ban'
  },
  {
    id: 10,
    category: 'warning',
    title: 'Política de Ocupação',
    text: 'Lembre-se de representar sua ocupação profissional principal. Proteja a qualidade da rede mantendo-se focado.',
    iconName: 'ShieldAlert'
  },

  // --- Estrategia (Focus) ---
  {
    id: 11,
    category: 'strategy',
    title: 'A Regra 50/50',
    text: 'Use a proporção 50/50. Se você falar 80% do tempo, perdeu a reunião. Escute para entender, não para responder.',
    iconName: 'Scale'
  },
  {
    id: 12,
    category: 'strategy',
    title: 'Conexão Profunda',
    text: 'Busque a conexão nos "Interesses" do Perfil GAINS. Aí nasce a química pessoal que facilita os negócios.',
    iconName: 'Target'
  },
  {
    id: 13,
    category: 'strategy',
    title: 'O Follow-up',
    text: 'Não termine sem o "Follow-up". Comprometa-se com uma ação específica: buscar uma referência ou fazer uma introdução.',
    iconName: 'ArrowRightCircle'
  },
  {
    id: 14,
    category: 'strategy',
    title: 'Pergunta Poderosa',
    text: 'Pergunta: "Como posso saber se estou diante de uma boa referência para você?" Seja específico.',
    iconName: 'HelpCircle'
  }
];