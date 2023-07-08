/// <reference types="vite/client" />

declare module "*.wgsl?raw" {
  const value: string;
  export default value;
}

declare var stopped: boolean;

declare var __skipComputing: boolean;

/** dirty hook for extracting error messages */
declare var __lagopusHandleCompilationInfo: (
  info: GPUCompilationInfo,
  code: string
) => void;

declare var __hotUpdateParams: (partial: number[]) => void;
