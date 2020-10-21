import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { checkRegions, initializeCheckedRegions, setRegions } from './actions';

import Regions from './Regions';

function loadRegions({ dispatch }) {
  const regions = [];
  // TODO : fetch data
  setRegions(regions);
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(id, isChecked) {
    dispatch(checkRegions({ id, isChecked }));

    dispatch(initializeCheckedRegions({ id }));
  }

  return (
    <Regions regions={regions} onClick={handleClick} />
  );
}
