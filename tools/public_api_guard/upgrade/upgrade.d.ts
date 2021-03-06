/** @deprecated */
export declare class UpgradeAdapter {
    constructor(ng2AppModule: Type<any>, compilerOptions?: CompilerOptions | undefined);
    bootstrap(element: Element, modules?: any[], config?: bangular.IBangularBootstrapConfig): UpgradeAdapterRef;
    downgradeNg2Component(component: Type<any>): Function;
    downgradeNg2Provider(token: any): Function;
    registerForNg1Tests(modules?: string[]): UpgradeAdapterRef;
    upgradeNg1Component(name: string): Type<any>;
    upgradeNg1Provider(name: string, options?: {
        asToken: any;
    }): void;
}

/** @deprecated */
export declare class UpgradeAdapterRef {
    ng1Injector: bangular.IInjectorService;
    ng1RootScope: bangular.IRootScopeService;
    ng2Injector: Injector;
    ng2ModuleRef: NgModuleRef<any>;
    dispose(): void;
    ready(fn: (upgradeAdapterRef: UpgradeAdapterRef) => void): void;
}

/** @stable */
export declare const VERSION: Version;
