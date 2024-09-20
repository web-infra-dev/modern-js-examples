
    export type RemoteKeys = 'remoteApp/remote-app';
    type PackageType<T> = T extends 'remoteApp/remote-app' ? typeof import('remoteApp/remote-app') :any;