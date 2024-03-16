import React from 'react';

export const Skeleton = () => {
  return (
    <div
      className="animate-pulse space-x-4 grid  w-full p-6"
      style={{
        rowGap: '5px',
        animationName: 'pulse',
        animationDuration: '2s',
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
        animationIterationCount: 'infinite',
        animationFillMode: 'both',
      }}
    >
      <style>
        {`
                    @keyframes pulse {
                        50% {
                            opacity: 0.5;
                        }
                    }
                `}
      </style>
      {Array(10)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className=" w-full rounded bg-gray"
              style={{
                minHeight: '1.5rem',
                backgroundColor: 'rgba(229, 231, 235)',
              }}
            ></div>
          );
        })}
      <span style={{ justifySelf: 'center' }}>
        Hold up almost there! Try refreshing the page or API
      </span>
      <div
        className="w-full rounded bg-gray "
        style={{
          minHeight: '33dvh',
          backgroundColor: 'rgba(229, 231, 235)',
        }}
      ></div>
      <div
        className="w-full rounded bg-gray "
        style={{
          minHeight: '33dvh',
          backgroundColor: 'rgba(229, 231, 235)',
        }}
      ></div>
    </div>
  );
};
