export async function loadRegions() {
  try {
    const url = 'https://eatgo-customer-api.ahastudio.com/regions';
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}

export async function loadCategories() {
  try {
    const url = 'https://eatgo-customer-api.ahastudio.com/categories';
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}
