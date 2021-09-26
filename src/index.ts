import cron from 'node-cron';
import {Express} from 'express-serve-static-core';

export default (expressApp: Express, waitForEvent?: string): void => {
    expressApp.cron = (cronExpression: string, fn: () => void): void => {
        if (waitForEvent) {
            expressApp.on(waitForEvent, () => {
                cron.schedule(cronExpression, fn);
            });
        } else {
            cron.schedule(cronExpression, fn);
        }
    };
};
