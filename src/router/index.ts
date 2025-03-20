import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/EditorView/index.vue'),
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import('@/views/MaterialsView/index.vue'),
      children: [
        {
          path: 'selectGroup',
          name: 'selectGroup',
          component: () => import('@/views/MaterialsView/SelectGroupView.vue'),
        },
        {
          path: 'inputGroup',
          name: 'inputGroup',
          component: () => import('@/views/MaterialsView/InputGroupView.vue'),
        },
        {
          path: 'advancedGroup',
          name: 'advancedGroup',
          component: () => import('@/views/MaterialsView/AdvancedGroupView.vue'),
        },
        {
          path: 'noteGroup',
          name: 'noteGroup',
          component: () => import('@/views/MaterialsView/NoteGroupView.vue'),
        },
        {
          path: 'personalInfoGroup',
          name: 'personalInfoGroup',
          component: () => import('@/views/MaterialsView/PersonalInfoGroupView.vue'),
        },
        {
          path: 'contactGroup',
          name: 'contactGroup',
          component: () => import('@/views/MaterialsView/ContactGroupView.vue'),
        },
      ],
    },
  ],
})

export default router
