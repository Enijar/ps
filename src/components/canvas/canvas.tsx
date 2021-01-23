import React from "react";
import { CanvasWrapper, CanvasHelper } from "./styles";
import { Layer, PsContextType, Tool } from "../../config/types";
import { PsContext } from "../ps/context";
import { getCursor, createLayer, createTransform } from "../../utils";

export default function Canvas() {
  const {
    size,
    scale,
    setSize,
    setSelectedLayer,
    filters,
    layers,
    setLayers,
    pointGroups,
    settings,
    tool,
    pointer,
    brushSize,
    color,
    svg,
    pressedKeys,
  } = React.useContext(PsContext) as PsContextType;

  const onDragOver = React.useCallback((event: React.DragEvent<any>) => {
    event.stopPropagation();
    event.preventDefault();
  }, []);

  const onDrop = React.useCallback(
    async (event: React.DragEvent<any>) => {
      event.stopPropagation();
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files);
      const newLayers: Layer[] = [];
      for (let i = 0; i < files.length; i++) {
        try {
          newLayers.push(await createLayer(files[i], layers.length + i));
        } catch (err) {
          // @todo show error to user
          console.error(err);
        }
      }
      setLayers(layers.concat(newLayers));
    },
    [layers, setLayers]
  );

  const sortLayers = React.useCallback((layers: Layer[]) => {
    return layers.sort((a, b) => {
      return b.zIndex - a.zIndex;
    });
  }, []);

  React.useEffect(() => {
    if (layers.length > 0 && size.width + size.height === 0) {
      setSize({
        width: layers[0].image.width,
        height: layers[0].image.height,
        ratio: layers[0].image.ratio,
      });
    }
  }, [layers, size, setSize]);

  return (
    <CanvasWrapper
      style={{ cursor: getCursor(tool, pressedKeys) }}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <CanvasHelper style={{ display: layers.length > 0 ? "none" : undefined }}>
        Drop images here to get started!
      </CanvasHelper>
      <svg
        ref={svg}
        viewBox={`0 0 ${size.width} ${size.height}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          maxWidth: `${size.width}px`,
          maxHeight: `${size.height}px`,
          display: layers.length === 0 ? "none" : undefined,
        }}
      >
        <filter id="filters">
          {/* blur */}
          <feGaussianBlur stdDeviation={filters.blur} />
          {/* hue */}
          <feColorMatrix type="hueRotate" values={filters.hue.toString()} />
          {/* saturation */}
          <feColorMatrix
            type="saturate"
            values={filters.saturation.toString()}
          />
          {/* sepia */}
          {filters.sepia && (
            <feColorMatrix
              type="matrix"
              values="0.39 0.769 0.189 0 0 0.349 0.686 0.168 0 0 0.272 0.534 0.131 0 0 0 0 0 1 0"
            />
          )}
        </filter>

        <g filter="url(#filters)" style={{ transform: `scale(${scale})` }}>
          {sortLayers(layers).map((layer, index) => {
            return (
              <image
                onDragStart={(event) => event.preventDefault()}
                onMouseOver={() => {
                  if (!pointer.down) {
                    setSelectedLayer(layer);
                  }
                }}
                key={index}
                href={layer.image.src}
                transform={createTransform(size, layer)}
                opacity={layer.opacity}
              />
            );
          })}
        </g>

        {pointGroups.map((pointGroup, index) => {
          return (
            <path
              key={index}
              stroke={pointGroup.color}
              fill="none"
              d={`M${pointGroup.points
                .map((p) => [p.x * size.width, p.y * size.height].join(","))
                .join(",")}`}
              strokeWidth={pointGroup.size}
              strokeLinecap={settings.lineCap}
              strokeLinejoin="round"
            />
          );
        })}
        {tool === Tool.brush && (
          <circle
            cx={(pointer.x * size.width).toString()}
            cy={(pointer.y * size.height).toString()}
            r={brushSize / 2}
            fill={color}
            strokeMiterlimit="10"
          />
        )}
      </svg>
    </CanvasWrapper>
  );
}
