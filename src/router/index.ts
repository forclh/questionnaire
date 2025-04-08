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
          redirect: '/materials/inputGroup/textInput',
          children: [
            {
              path: 'textInput',
              name: 'textInput',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
          ],
        },
        {
          path: 'advancedGroup',
          name: 'advancedGroup',
          component: () => import('@/views/MaterialsView/AdvancedGroupView.vue'),
          redirect: '/materials/advancedGroup/dateSelect',
          children: [
            {
              path: 'dateSelect',
              name: 'dateSelect',
              component: () =>
                import('@/components/SurveyComs/Materials/AdvancedComs/DateSelect.vue'),
            },
          ],
        },
        {
          path: 'noteGroup',
          name: 'noteGroup',
          component: () => import('@/views/MaterialsView/NoteGroupView.vue'),
          redirect: '/materials/noteGroup/textNote',
          children: [
            {
              path: 'textNote',
              name: 'textNote',
              component: () => import('@/components/SurveyComs/Materials/NoteComs/TextNote.vue'),
            },
          ],
        },
        {
          path: 'personalInfoGroup',
          name: 'personalInfoGroup',
          component: () => import('@/views/MaterialsView/PersonalInfoGroupView.vue'),
          redirect: '/materials/personalInfoGroup/personalInfoName',
          children: [
            {
              path: 'personalInfoName',
              name: 'personalInfoName',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoIdCard',
              name: 'personalInfoIdCard',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoUniversity',
              name: 'personalInfoUniversity',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoMajor',
              name: 'personalInfoMajor',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoIndustry',
              name: 'personalInfoIndustry',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoCompany',
              name: 'personalInfoCompany',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoPosition',
              name: 'personalInfoPosition',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoGender',
              name: 'personalInfoGender',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: 'personalInfoEducation',
              name: 'personalInfoEducation',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: 'personalInfoOccupation',
              name: 'personalInfoOccupation',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: 'personalInfoAge',
              name: 'personalInfoAge',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: 'personalInfoBirth',
              name: 'personalInfoBirth',
              component: () =>
                import('@/components/SurveyComs/Materials/AdvancedComs/DateSelect.vue'),
            },
          ],
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
    store.setCurrentMaterialCom(to.name as string);
  }
  next();
});

export default router;
