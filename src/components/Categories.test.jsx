import { render, fireEvent } from '@testing-library/react';

import categories from '../fixtures/categories';

import Categories from './Categories';

describe('Categories', () => {
  const defaultCategory = categories[0];

  const handleClickCategory = jest.fn();

  function renderCategories({ selectedCategory } = {}) {
    return render(
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={handleClickCategory}
      />,
    );
  }

  it('카테고리 목록이 보여집니다.', () => {
    const { container } = renderCategories();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('category를 클릭하면 handleClcikCategory가 호출됩니다.', () => {
    const { getByRole } = renderCategories();

    fireEvent.click(getByRole('button', { name: defaultCategory.name }));

    expect(handleClickCategory).toHaveBeenCalledWith(defaultCategory.id);
  });

  it('선택되었으면 (V)가 함께 보여집니다.', () => {
    const { getByRole } = renderCategories({ selectedCategory: defaultCategory.id });

    expect(getByRole('button', { name: `${defaultCategory.name}(V)` })).toBeInTheDocument();
  });
});
