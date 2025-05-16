import { useEditorStore } from '@/stores/useEditor';

// 设置当前题目从而显示题目编辑器
export const useQuestionSelect = () => {
  const showEditor = (index: number) => {
    const editorStore = useEditorStore();
    if (editorStore.currentQuestionIndex === index) {
      editorStore.setCurrentQuestionIndex(-1);
    } else {
      editorStore.setCurrentQuestionIndex(index);
    }
  };

  return {
    showEditor,
  };
};
