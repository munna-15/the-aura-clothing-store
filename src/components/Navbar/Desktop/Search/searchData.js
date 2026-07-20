export const trendingSearches = [
  "Oversized Shirt",
  "Premium Hoodie",
  "Linen Collection",
  "Black T-Shirt",
  "Cargo Pants",
];

export const getRecentSearches = () => {
  try {
    return (
      JSON.parse(
        localStorage.getItem("recentSearches")
      ) || []
    );
  } catch (error) {
    return [];
  }
};

export const saveRecentSearch = (keyword) => {
  if (!keyword?.trim()) return;

  const normalized = keyword.trim();

  const previous = getRecentSearches();

  const updated = [
    normalized,
    ...previous.filter(
      (item) =>
        item.toLowerCase() !== normalized.toLowerCase()
    ),
  ].slice(0, 6);

  localStorage.setItem(
    "recentSearches",
    JSON.stringify(updated)
  );
};

export const clearRecentSearches = () => {
  localStorage.removeItem("recentSearches");
};