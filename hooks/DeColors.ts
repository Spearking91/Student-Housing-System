import { useThemeColor } from "./use-theme-color";

/**
 * A custom hook to get theme-based colors.
 * @returns An object with `backgroundColor` and `textColor`.
 */
export function useDeColors() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  return { backgroundColor, textColor };
}
