// 公共类型
import type { defineComponent } from 'vue'

// 导出Vue组件类型
export type VueComType = ReturnType<typeof defineComponent>
