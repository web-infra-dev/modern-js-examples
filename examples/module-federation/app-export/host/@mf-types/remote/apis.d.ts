
    export type RemoteKeys = 'remote/app';
    type PackageType<T> = T extends 'remote/app' ? typeof import('remote/app') :any;