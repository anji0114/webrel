export const usePathFormatter = (path: string): string => {
  let formattedPath = path.replace(/\s+/g, '-');

  // 先頭にスラッシュがなければ追加
  if (!formattedPath.startsWith('/')) {
    formattedPath = `/${formattedPath}`;
  }
  // 末尾にスラッシュがあれば削除
  if (formattedPath.endsWith('/') && formattedPath.length > 1) {
    formattedPath = formattedPath.slice(0, -1);
  }

  return formattedPath;
};
