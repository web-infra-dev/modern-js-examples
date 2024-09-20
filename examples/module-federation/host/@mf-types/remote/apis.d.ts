
    export type RemoteKeys = 'remote/Button';
    type PackageType<T> = T extends 'remote/Button' ? typeof import('remote/Button') :any;