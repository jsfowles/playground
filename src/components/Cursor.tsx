// @ts-nocheck
import { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  if (typeof navigator !== 'undefined' && isMobile()) return null;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hoverImage, setHoverImage] = useState(null);
  const [hoverContainer, setHoverContainer] = useState(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    // handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {}, []);

  const onMouseMove = useCallback(
    (e) => {
      const link = e.path.find((el) => el.tagName === 'A');
      setLinkHovered(!!link);
      const tmpHoverContainer = e.path.find(
        (el) => !!el.dataset?.hoverContainer
      );

      if (hoverContainer !== tmpHoverContainer) {
        setHoverContainer(tmpHoverContainer);
      }

      if (hoverContainer) {
        const hoverImage = hoverContainer.querySelector('[data-hover-img]');
        hoverImage.style.display = 'initial';
        hoverImage.style.left = `${e.clientX - left}px`;
        hoverImage.style.top = `${e.clientY - top}px`;
      }
      setPosition({ x: e.clientX, y: e.clientY });
    },
    [setLinkHovered, setPosition, setHoverImage]
  );

  const onMouseDown = useCallback(() => {
    setClicked(true);
  }, [setClicked]);

  const onMouseUp = useCallback(() => {
    setClicked(false);
  }, [setClicked]);

  const onMouseLeave = useCallback(() => {
    setHidden(true);
  }, [setClicked]);

  const onMouseEnter = useCallback(() => {
    setHidden(false);
  }, [setClicked]);

  const cursorClasses = classnames('cursor', {
    'cursor--clicked': clicked,
    'cursor--hidden': hidden,
    'cursor--link-hovered': linkHovered,
  });

  return (
    // <div
    //   className={cursorClasses}
    //   style={{ left: `${position.x}px`, top: `${position.y}px` }}
    // />
    null
  );
};

export default Cursor;
