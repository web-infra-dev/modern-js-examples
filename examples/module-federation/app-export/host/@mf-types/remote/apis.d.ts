
    export type RemoteKeys = 'remote/remote';
    type PackageType<T> = T extends 'remote/remote' ? typeof import('remote/remote') :any;