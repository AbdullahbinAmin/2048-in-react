import React, { ReactNode } from "react";
import { tileCount as defaultTileCount } from "../index.html"; // <--- Updated import path

type BoardContextType = {
  containerWidth: number;
  tileCount: number;
};

export const BoardContext = React.createContext<BoardContextType>({
  containerWidth: 0,
  tileCount: defaultTileCount,
});

type Props = {
  containerWidth?: number;
  tileCount?: number;
  children: ReactNode;
};

export const BoardProvider = ({
  children,
  containerWidth = 0,
  tileCount = defaultTileCount,
}: Props) => {
  return (
    <BoardContext.Provider value={{ containerWidth, tileCount }}>
      {children}
    </BoardContext.Provider>
  );
};