import React, { ReactNode } from "react";

// This is the constant that defines the default tile count.
// By defining it here, you remove the problematic import.
export const TILE_COUNT = 4;

export const BoardContext = React.createContext({
  containerWidth: 0,
  // Use TILE_COUNT here instead of the imported variable
  tileCount: TILE_COUNT,
});

type Props = {
  containerWidth?: number;
  tileCount?: number;
  children: ReactNode; // Using ReactNode is more specific and better practice than `any`
};

export const BoardProvider = ({
  children,
  containerWidth = 0,
  // Use TILE_COUNT here as the default value
  tileCount = TILE_COUNT,
}: Props) => {
  return (
    <BoardContext.Provider value={{ containerWidth, tileCount }}>
      {children}
    </BoardContext.Provider>
  );
};