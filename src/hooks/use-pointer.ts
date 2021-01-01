import React from "react";
import { ActionType, Pointer } from "../config/types";
import { clamp } from "../utils";
import emitter from "../services/emitter";
import { ACTION_MOVE } from "../config/consts";

export default function usePointer(
  wrapper: React.MutableRefObject<HTMLDivElement | null>,
  img: React.MutableRefObject<HTMLImageElement | null>
): Pointer {
  const [action, setAction] = React.useState<ActionType>(null);
  const [pointer, setPointer] = React.useState<Pointer>({
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    down: false,
  });

  React.useEffect(() => {
    const wrapperElement = wrapper.current;
    const imgElement = img.current;

    if (imgElement === null) return;

    function onPointerDown(event: PointerEvent): void {
      if (action !== ACTION_MOVE) return;
      if (wrapperElement === null) return;
      const { width, height } = wrapperElement.getBoundingClientRect();
      setPointer((pointer) => {
        const x = clamp(event.pageX, 0, width) / width;
        const y = clamp(event.pageY, 0, height) / height;
        pointer.startX = x;
        pointer.startY = y;
        pointer.x = x - pointer.startX + pointer.lastX;
        pointer.y = y - pointer.startY + pointer.lastY;
        pointer.down = true;
        return { ...pointer };
      });
    }

    function onPointerMove(event: PointerEvent): void {
      if (action !== ACTION_MOVE) return;
      if (wrapperElement === null) return;
      const { width, height } = wrapperElement.getBoundingClientRect();
      setPointer((pointer) => {
        const x = clamp(event.pageX, 0, width) / width;
        const y = clamp(event.pageY, 0, height) / height;
        pointer.x = x - pointer.startX + pointer.lastX;
        pointer.y = y - pointer.startY + pointer.lastY;
        return { ...pointer };
      });
    }

    function onPointerUp(event: PointerEvent): void {
      if (action !== ACTION_MOVE) return;
      setPointer((pointer) => {
        if (event.target === imgElement) {
          pointer.lastX = pointer.x;
          pointer.lastY = pointer.y;
        }
        pointer.down = false;
        return { ...pointer };
      });
    }

    imgElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return (): void => {
      imgElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [wrapper, img, action]);

  React.useEffect(() => {
    return emitter.subscribe("action", setAction);
  }, []);

  return pointer;
}