export const loadUserData = (key, userId, defaultValue) => {
  if (!userId) return defaultValue;

  const storedData = localStorage.getItem(`${key}-${userId}`);

  return storedData
    ? JSON.parse(storedData)
    : defaultValue;
};

export const saveUserData = (key, userId, data) => {
  if (!userId) return;

  localStorage.setItem(
    `${key}-${userId}`,
    JSON.stringify(data)
  );
};