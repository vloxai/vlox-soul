import { Persona } from '../types';

/**
 * Simulates an AI call for the purpose of this demo.
 */
export const transformSentence = async (text: string, persona: Persona): Promise<string> => {
  // Artificial delay to simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1500));

  const mockLogic: Record<string, (t: string) => string> = {
    scholar: (t) => `"${t}" ... 라니, 참으로 비통한 일이 아닐 수 없구료. 내 가르침을 명심하시오.`,
    genz: (t) => `오늘 ${t} 실화냐? 진짜 폼 미쳤다 ㄷㄷ 갓기 그 잡채임.`,
    kindergarten: (t) => `우리 친구들~ 지금 ${t} 하고 있나요? 정말정말 대단해요! 짝짝짝~!`,
    detective: (t) => `${t}. 이 상황의 기저에는 명확한 인과관계가 존재한다. 범인은 이 안에 있어.`,
    chef: (t) => `${t}!! 간이 하나도 안 맞잖아! 신선한 재료로 다시 가져와! 당장!`,
    robot: (t) => `[SYSTEM] 입력값 "${t}" 분석 완료. 프로세스를 실행합니다. 오차 범위 0.01% 미만.`
  };

  return mockLogic[persona.id]?.(text) || `${text} (변환 실패)`;
};