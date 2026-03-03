import { Persona } from '../types';

export const PERSONAS: Persona[] = [
  {
    id: 'scholar',
    name: '조선시대 선비',
    description: '격식 있고 고풍스러운 말투로 가르침을 줍니다.',
    prompt: 'Transform the text into the style of a Joseon Dynasty scholar. Use archaic Korean honorifics like "~하오", "~하였소", "~인 것이오". Be polite and philosophical.',
    emoji: '📜',
    color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 dark:border-amber-600 text-amber-900 dark:text-amber-100'
  },
  {
    id: 'genz',
    name: 'MZ 세대',
    description: '힙하고 트렌디한 용어와 줄임말을 사용합니다.',
    prompt: 'Transform the text into Korean MZ generation slang. Use words like "완전 대박적", "~함", "~각", "ㄹㅇ", "킹정". Be energetic and informal.',
    emoji: '🎧',
    color: 'bg-pink-50 dark:bg-pink-900/20 border-pink-400 dark:border-pink-600 text-pink-900 dark:text-pink-100'
  },
  {
    id: 'kindergarten',
    name: '유치원 선생님',
    description: '매우 다정하고 상냥하며 쉬운 단어를 사용합니다.',
    prompt: 'Transform the text into the style of a kind kindergarten teacher. Use high pitch tones, repetitive sounds, and very gentle endings like "~했나요?", "~해볼까요?", "우와~".',
    emoji: '🐥',
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400 dark:border-yellow-600 text-yellow-900 dark:text-yellow-100'
  },
  {
    id: 'detective',
    name: '냉철한 탐정',
    description: '모든 상황을 추리하고 비판적으로 분석합니다.',
    prompt: 'Transform the text into a cold, analytical detective style like Sherlock Holmes. Focus on logic, evidence, and deduction. Use endings like "~인 게 분명하군", "이것이 결론이다".',
    emoji: '🔍',
    color: 'bg-zinc-50 dark:bg-zinc-800 border-zinc-400 dark:border-zinc-500 text-zinc-900 dark:text-zinc-100'
  },
  {
    id: 'chef',
    name: '열정적인 셰프',
    description: '음식 비유를 곁들여 강렬하게 말합니다.',
    prompt: 'Transform the text into a passionate chef style (like Gordon Ramsay but Korean). Use culinary metaphors. Be intense and demanding about quality.',
    emoji: '👨‍🍳',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-400 dark:border-orange-600 text-orange-900 dark:text-orange-100'
  },
  {
    id: 'robot',
    name: '미래형 안드로이드',
    description: '감정 없이 데이터 위주로 딱딱하게 말합니다.',
    prompt: 'Transform the text into a robotic, emotionless AI interface style. Use technical terms and numbered lists. End sentences with "~완료", "~수행 중".',
    emoji: '🤖',
    color: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-400 dark:border-cyan-600 text-cyan-900 dark:text-cyan-100'
  }
];