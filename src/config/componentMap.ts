import { markRaw } from 'vue';
// 业务组件
import SingleSelect from '@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue';
import MultiSelect from '@/components/SurveyComs/Materials/SelectComs/MultiSelect.vue';
import OptionSelect from '@/components/SurveyComs/Materials/SelectComs/OptionSelect.vue';
import SinglePicSelect from '@/components/SurveyComs/Materials/SelectComs/SinglePicSelect.vue';
import MultiPicSelect from '@/components/SurveyComs/Materials/SelectComs/MultiPicSelect.vue';
import TextInput from '@/components/SurveyComs/Materials/InputComs/TextInput.vue';
import TextNote from '@/components/SurveyComs/Materials/NoteComs/TextNote.vue';
import DateSelect from '@/components/SurveyComs/Materials/AdvancedComs/DateSelect.vue';
// 编辑组件
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue';
import DateEditor from '@/components/SurveyComs/EditItems/DateEditor.vue';
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue';
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue';
import OptionsEditor from '@/components/SurveyComs/EditItems/OptionsEditor.vue';
import PicOptionsEditor from '@/components/SurveyComs/EditItems/PicOptionsEditor.vue';
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue';
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue';
import TextInputTypeEditor from '@/components/SurveyComs/EditItems/TextInputTypeEditor.vue';
import TextTypeEditor from '@/components/SurveyComs/EditItems/TextTypeEditor.vue';
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue';
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue';

// 所有组件名和组件之间的映射关系
export const componentMap = {
  // 业务组件
  "singleSelect": markRaw(SingleSelect),
  "multiSelect": markRaw(MultiSelect),
  "optionSelect": markRaw(OptionSelect),
  "singlePicSelect": markRaw(SinglePicSelect),
  "multiPicSelect": markRaw(MultiPicSelect),
  "textInput": markRaw(TextInput),
  "textNote": markRaw(TextNote),
  "dateSelect": markRaw(DateSelect),
  "personalInfoGender": markRaw(SingleSelect),
  "personalInfoName": markRaw(TextInput),
  "personalInfoIdCard": markRaw(TextInput),
  "personalInfoUniversity": markRaw(TextInput),
  "personalInfoMajor": markRaw(TextInput),
  "personalInfoIndustry": markRaw(TextInput),
  "personalInfoPosition": markRaw(TextInput),
  "personalInfoCompany": markRaw(TextInput),
  "personalInfoOccupation": markRaw(SingleSelect),
  "personalInfoEducation": markRaw(SingleSelect),
  "personalInfoAge": markRaw(SingleSelect),
  "personalInfoBirth": markRaw(DateSelect),
  // 编辑组件
  "colorEditor": markRaw(ColorEditor),
  "dateEditor": markRaw(DateEditor),
  "descEditor": markRaw(DescEditor),
  "italicEditor": markRaw(ItalicEditor),
  "optionsEditor": markRaw(OptionsEditor),
  "picOptionsEditor": markRaw(PicOptionsEditor),
  "positionEditor": markRaw(PositionEditor),
  "sizeEditor": markRaw(SizeEditor),
  "textInputTypeEditor": markRaw(TextInputTypeEditor),
  "textTypeEditor": markRaw(TextTypeEditor),
  "titleEditor": markRaw(TitleEditor),
  "weightEditor": markRaw(WeightEditor),
}