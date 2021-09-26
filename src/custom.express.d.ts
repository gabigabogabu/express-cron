declare namespace Express {
    export interface Application {
        cron: (schedule: string, fn: () => void) => void;
    }
}

// declare module 'express-serve-static-core' {
//     export interface Application {
//         cron: (schedule: string, fn: () => void) => void;
//     }
// }
