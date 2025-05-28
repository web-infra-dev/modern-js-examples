import '@modern-js/runtime/registry/main';
export declare const provider: () => {
    render(info: import("@module-federation/bridge-react").RenderParams): Promise<void>;
    destroy(info: import("@module-federation/bridge-react").DestroyParams): void;
};
export default provider;
