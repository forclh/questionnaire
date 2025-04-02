// 定义默认状态的映射表

import singleSelectDefaultStatus from './SingleSelect.ts';
import multiSelectDefaultStatus from './MultiSelect.ts';
import optionSelectDefaultStatus from './OptionSelect.ts';
import singlePicSelectDefaultStatus from './SinglePicSelect.ts';
import multiPicSelectDefaultStatus from './MultiPicSelect.ts';
import textInputDefaultStatus from './TextInput.ts';


export const defaultStatusMap = {
  singleSelect: singleSelectDefaultStatus,
  multiSelect: multiSelectDefaultStatus,
  optionSelect: optionSelectDefaultStatus,
  singlePicSelect: singlePicSelectDefaultStatus,
  multiPicSelect: multiPicSelectDefaultStatus,
  textInput: textInputDefaultStatus,
};
