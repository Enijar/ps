import React from "react";

export type Point = {
  x: number;
  y: number;
};

export type PointGroup = {
  color: string;
  size: number;
  rotation: number;
  points: Point[];
};

export type Pointer = {
  down: boolean;
  x: number;
  y: number;
};

export type Settings = {
  lineCap: "round";
  p: number;
};

export type Position = {
  x: number;
  y: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
};

export enum FilterTypes {
  opacity,
  blur,
  saturation,
  hue,
  sepia,
}

export type Filters = {
  [FilterTypes.opacity]: number;
  [FilterTypes.blur]: number;
  [FilterTypes.saturation]: number;
  [FilterTypes.hue]: number;
  [FilterTypes.sepia]: boolean;
};

export type Size = {
  width: number;
  height: number;
  ratio: number;
};

export type GetPointsProps = {
  layer: Layer;
  pointer: Pointer;
  color: string;
  brushSize?: number;
  size: {
    width: number;
    height: number;
  };
  settings: Settings;
};

export enum Tool {
  move,
  brush,
  zoom,
  crop,
}

export enum ToolHotKey {
  move = "v",
  brush = "b",
  zoom = "z",
  zoomOut = "alt",
  crop = "c",
}

export type PressedKeys = string[];

export type Layer = {
  id: string;
  name: string;
  visible: boolean;
  image: {
    src: string;
    width: number;
    height: number;
    ratio: number;
  };
  rotation: number;
  position: Position;
  filters: Filters;
  order: number;
  pointGroups: PointGroup[];
  pointGroupIndex: number;
};

export type PsContextType = {
  layers: Layer[];
  setLayers: React.Dispatch<React.SetStateAction<Layer[]>>;
  selectedLayer: Layer | null;
  setSelectedLayer: React.Dispatch<React.SetStateAction<Layer | null>>;
  pointer: Pointer;
  setPointer: React.Dispatch<React.SetStateAction<Pointer>>;
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  tool: Tool;
  setTool: React.Dispatch<React.SetStateAction<Tool>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  brushSize: number;
  setBrushSize: React.Dispatch<React.SetStateAction<number>>;
  pressedKeys: PressedKeys;
  setPressedKeys: React.Dispatch<React.SetStateAction<PressedKeys>>;
  settings: Settings;
  svg: React.MutableRefObject<SVGSVGElement | null>;
  reset: React.MouseEventHandler;
  download: React.MouseEventHandler;
};

export enum OrderType {
  asc,
  desc,
}
