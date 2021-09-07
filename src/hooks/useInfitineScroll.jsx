import { useState, useEffect } from 'react';

const useInfiniteScroll = ({
  root = null,
  threshold = 0,
  rootMargin = '0px',
  onIntersect,
}) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });   

    if (target) observer.observe(target);
    return () => observer && observer.disconnect();
  }, [target, root, rootMargin, threshold, onIntersect]);

  return { setTarget };
};

export default useInfiniteScroll;