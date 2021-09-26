import {Express} from 'express-serve-static-core';
declare module 'express-serve-static-core' {
    export interface Application {
        cron: (schedule: string, fn: () => void) => void;
    }
}
declare const _default: (expressApp: Express, waitForEvent?: string) => void;
export default _default;
