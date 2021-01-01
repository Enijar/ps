import React from "react";
import { Wrapper } from "./styles";
import { Position, Props } from "./types";
import { ACTION_MOVE } from "../../config/consts";
import { TRANSPARENT_BACKGROUND } from "../../config/images";
import { getCursor } from "../../utils";
import { PsContext, PsContextType } from "../../context/ps";
import usePointer from "../../hooks/use-pointer";
import useOnContext from "../../hooks/use-on-context";
import useOnDrag from "../../hooks/use-on-drag";

export default function Canvas({ src, width = 640, height = 480 }: Props) {
  const { action } = React.useContext(PsContext) as PsContextType;
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const img = React.useRef<HTMLImageElement | null>(null);
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });
  const pointer = usePointer(wrapper, img);
  const onContextMenu = useOnContext();
  const onDragStart = useOnDrag();

  React.useEffect(() => {
    if (!pointer.down || action !== ACTION_MOVE) return;
    setPosition({
      x: pointer.x,
      y: pointer.y,
    });
  }, [pointer, action]);

  return (
    <Wrapper
      width={width}
      height={height}
      ref={wrapper}
      style={{
        backgroundImage: `url("${TRANSPARENT_BACKGROUND}")`,
        width: `${width}px`,
        height: `${height}px`,
        cursor: getCursor(action),
      }}
      onContextMenu={onContextMenu}
    >
      <img
        src={src}
        alt=""
        onDragStart={onDragStart}
        ref={img}
        style={{
          left: `${position.x * width}px`,
          top: `${position.y * height}px`,
        }}
      />
    </Wrapper>
  );
}
