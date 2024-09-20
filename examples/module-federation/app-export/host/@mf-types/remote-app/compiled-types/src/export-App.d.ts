/// <reference types="react" />
import '@modern-js/runtime/registry/main';
export declare const provider: () => {
    render(info: any): Promise<void>;
    destroy(info: {
        dom: HTMLElement;
    }): Promise<void>;
    rawComponent: import("react").ComponentType<any>;
    __BRIDGE_FN__: (_args: any) => void;
};
