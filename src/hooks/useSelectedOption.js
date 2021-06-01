import { useDispatch, useSelector } from 'react-redux';

import {
  updateSelectedCategory,
  updateSelectedRegion,
} from '../redux_module/selectedSlice';

export default function useSelectedOption(optionType) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected[optionType]);

  const selectedSetter = {
    region: (name) => dispatch(updateSelectedRegion(name)),
    category: (name) => dispatch(updateSelectedCategory(name)),
  };

  return {
    selected,
    setSelected: selectedSetter[optionType],
  };
}
