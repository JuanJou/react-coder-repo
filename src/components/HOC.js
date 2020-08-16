import React, { useEffect } from "react";

export function WithLog(WrappedComponent, props, whenChanged) {
  return function LogComponent() {
    useEffect(
      () => console.log(props),
      whenChanged.map((attr) => props[attr])
    );
    return <WrappedComponent {...props}></WrappedComponent>;
  };
}
