import { useEffect, useRef, useState } from "react";

type Props = Partial<
  Pick<IntersectionObserver, "root" | "rootMargin" | "thresholds">
>;

/**
 * Custom hook to observe elements using IntersectionObserver.
 *
 * @param options - Options for the IntersectionObserver, including `root`, `rootMargin`, and `thresholds`.
 * @returns An object containing the IntersectionObserver instance, a function to set the elements to observe, and the current entries.
 */
export function useIntersectionObserver(options: Props) {
  const [elements, setElements] = useState<NodeListOf<Element> | null>(null);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  const observer = useRef(
    new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options)
  );

  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();

    if (elements && elements.length > 0) {
      elements.forEach((el) => currentObserver.observe(el));
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  return { observer: observer.current, setElements, entries };
}
