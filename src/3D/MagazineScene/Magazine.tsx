import { use, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MagazineContext } from "./Context";
import { Page } from "./Page";
import { IMagazineProps } from "./types";

export const Magazine = ({ images }: IMagazineProps) => {
  const { current } = use(MagazineContext);
  const [deferredPage, setDeferredPage] = useState(current);
  const length = useMemo(() => images.length, [images.length]);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToPage = useCallback(() => {
    setDeferredPage(deferredPage => {
      if (current === deferredPage) {
        return deferredPage;
      }
      timeout.current = setTimeout(
        () => {
          goToPage();
        },
        Math.abs(current - deferredPage) > 2 ? 50 : 150,
      );
      if (current > deferredPage) {
        return deferredPage + 1;
      }
      return deferredPage - 1;
    });
  }, [current]);

  useEffect(() => {
    goToPage();
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, goToPage]);

  return (
    <group rotation-y={-Math.PI / 2} receiveShadow>
      {images.map((image, index) => (
        <Page
          key={index}
          {...image}
          index={index}
          current={deferredPage}
          opened={deferredPage > index}
          bookClosed={deferredPage === 0 || deferredPage === length}
        />
      ))}
    </group>
  );
};
