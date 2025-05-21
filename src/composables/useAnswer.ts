import type { EmitType } from '@/types';

export function useAnswer(emit: EmitType) {
  const emitAnswer = (value: any) => {
    emit('updateAnswer', value);
  };

  return {
    emitAnswer,
  };
}
