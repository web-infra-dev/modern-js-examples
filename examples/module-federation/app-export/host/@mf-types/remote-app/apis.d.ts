
    export type RemoteKeys = 'remote-app/remote';
    type PackageType<T> = T extends 'remote-app/remote' ? typeof import('remote-app/remote') :any;