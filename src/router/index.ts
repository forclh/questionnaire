import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { useMaterialStore } from '@/stores/useMaterial';
import type { MaterialComType } from '@/types';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/editor/:id(\\d+)?',
      name: 'editor',
      component: () => import('@/views/EditorView/index.vue'),
      children: [
        {
          path: 'questionTypeGroup',
          name: 'questionTypeGroup',
          component: () => import('@/views/EditorView/LeftSide/QuestionTypeGroup.vue'),
        },
        {
          path: 'outline',
          name: 'outline',
          component: () => import('@/views/EditorView/LeftSide/Outline.vue'),
        },
      ],
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
            {
              path: 'scoreSelect',
              name: 'scoreSelect',
              component: () =>
                import('@/components/SurveyComs/Materials/AdvancedComs/ScoreSelect.vue'),
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
          redirect: '/materials/contactGroup/personalInfoWeChat',
          children: [
            {
              path: 'personalInfoPhone',
              name: 'personalInfoPhone',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoWeChat',
              name: 'personalInfoWeChat',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoQQ',
              name: 'personalInfoQQ',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoEmail',
              name: 'personalInfoEmail',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: 'personalInfoAddress',
              name: 'personalInfoAddress',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/preview/:id(\\d+)', // 预览页面
      name: 'preview',
      component: () => import('@/views/Preview.vue'),
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: () => import('@/views/QuizView.vue'),
    },
  ],
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const activeView = localStorage.getItem('activeView');
  const store = useMaterialStore();
  if (activeView === 'materials' && to.name) {
    store.setCurrentMaterialCom(to.name as MaterialComType);
  }
  next();
});

export default router;
