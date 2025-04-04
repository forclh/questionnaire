import { useMaterialStore } from '@/stores/useMaterial';
import { createRouter, createWebHistory } from 'vue-router';
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
      redirect: '/materials/selectGroup',
      children: [
        {
          path: 'selectGroup',
          name: 'selectGroup',
          component: () => import('@/views/MaterialsView/SelectGroupView.vue'),
          redirect: '/materials/selectGroup/singleSelect',
          children: [
            {
              path: 'singleSelect',
              name: 'singleSelect',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: 'multiSelect',
              name: 'multiSelect',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/MultiSelect.vue'),
            },
            {
              path: 'optionSelect',
              name: 'optionSelect',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/OptionSelect.vue'),
            },
            {
              path: 'singlePicSelect',
              name: 'singlePicSelect',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SinglePicSelect.vue'),
            },
            {
              path: 'multiPicSelect',
              name: 'multiPicSelect',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/MultiPicSelect.vue'),
            },
          ],
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
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const activeView = localStorage.getItem('activeView');
  const store = useMaterialStore();
  if (activeView === 'materials' && to.name) {
    store.setCurrentMaterialCom(to.name as string)
  }
  next();
});

export default router;
