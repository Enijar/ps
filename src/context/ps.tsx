import React from "react";
import { ActionType, Position } from "../config/types";
import { DEFAULTS } from "../config/consts";

type Props = {
  children: any;
};

export type PsContextType = {
  action: ActionType;
  setAction: React.Dispatch<React.SetStateAction<ActionType>>;
  keys: string[];
  opacity: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  flipX: number;
  setFlipX: React.Dispatch<React.SetStateAction<number>>;
  flipY: number;
  setFlipY: React.Dispatch<React.SetStateAction<number>>;
  saturation: number;
  setSaturation: React.Dispatch<React.SetStateAction<number>>;
  contrast: number;
  setContrast: React.Dispatch<React.SetStateAction<number>>;
  hue: number;
  setHue: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  reset: React.RefCallback<any>;
  invert: number;
  setInvert: React.Dispatch<React.SetStateAction<number>>;
};

export const PsContext = React.createContext({});

export default function PsContextProvider({ children }: Props) {
  const [action, setAction] = React.useState<ActionType>(null);
  const [keys, setKeys] = React.useState<string[]>([]);
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState<number>(1);
  const [rotation, setRotation] = React.useState<number>(0);
  const [zoom, setZoom] = React.useState<number>(1);
  const [flipX, setFlipX] = React.useState<number>(1);
  const [flipY, setFlipY] = React.useState<number>(1);
  const [saturation, setSaturation] = React.useState<number>(1);
  const [contrast, setContrast] = React.useState<number>(1);
  const [hue, setHue] = React.useState<number>(0);
  const [invert, setInvert] = React.useState<number>(0);

  const reset = React.useCallback(() => {
    setPosition(DEFAULTS.position);
    setOpacity(DEFAULTS.opacity);
    setRotation(DEFAULTS.rotation);
    setZoom(DEFAULTS.zoom);
    setFlipX(DEFAULTS.flipX);
    setFlipY(DEFAULTS.flipY);
    setSaturation(DEFAULTS.saturation);
    setContrast(DEFAULTS.contrast);
    setHue(DEFAULTS.hue);
    setHue(DEFAULTS.invert);
  }, []);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      setKeys((keys: string[]) => {
        if (!keys.includes(key)) return [...keys, key];
        return keys;
      });
    }

    function onKeyUp(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      setKeys((keys: string[]) => {
        const index = keys.indexOf(key);
        if (index > -1) keys.splice(index, 1);
        return [...keys];
      });
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <PsContext.Provider
      value={{
        action,
        setAction,
        keys,
        opacity,
        setOpacity,
        rotation,
        setRotation,
        position,
        setPosition,
        flipX,
        setFlipX,
        flipY,
        setFlipY,
        saturation,
        setSaturation,
        contrast,
        setContrast,
        hue,
        setHue,
        zoom,
        setZoom,
        reset,
        invert,
        setInvert,
      }}
    >
      {children}
    </PsContext.Provider>
  );
}
