
    export type RemoteKeys = 'remote-app/remote-app';
    type PackageType<T> = T extends 'remote-app/remote-app' ? typeof import('remote-app/remote-app') :any;