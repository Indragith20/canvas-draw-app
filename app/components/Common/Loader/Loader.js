import React from 'react';
import { useTransition } from "@remix-run/react";
import styles from './Loader.css';

export const LoaderLinks = () => [{
  href: styles,
  rel: 'stylesheet'
}]


function GlobalLoading() {
  const transition = useTransition();
  const active = transition.state !== "idle";

  const ref = React.useRef(null);
  const [animationComplete, setAnimationComplete] = React.useState(true);

  React.useEffect(() => {
    if (!ref.current) return;
    if (active) setAnimationComplete(false);

    Promise.allSettled(
      ref.current.getAnimations().map(({ finished }) => finished)
    ).then(() => !active && setAnimationComplete(true));
  }, [active]);

  let animationCompleted = transition.state === "idle" && animationComplete;

  return (
    <div id="loader">
      {!animationCompleted && (
        <>
          <div
            role="progressbar"
            aria-hidden={!active}
            aria-valuetext={active ? "Loading" : undefined}
            className="loader"
          >
            <div
              ref={ref}
              className={`inner-loader ${animationCompleted ? "animationComplete" : ''} ${transition.state === "submitting" ? "submitting" : ''} ${transition.state === "loading" ? "loading" : ''} ${transition.state === "idle" && !animationComplete ? "idle" : ''}`}
            />
          </div>
          <div className='circle-loader-container'>
            <div className='loader-2'>
              <span></span>
            </div>
          </div>

        </>
      )}


    </div>

  );
}

export { GlobalLoading };