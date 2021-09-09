import React from 'react';

import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
}
