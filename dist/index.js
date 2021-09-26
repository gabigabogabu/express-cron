import cron from 'node-cron';
export default (expressApp, waitForEvent) => {
    expressApp.cron = (cronExpression, fn) => {
        if (waitForEvent) {
            expressApp.on(waitForEvent, () => {
                cron.schedule(cronExpression, fn);
            });
        }
        else {
            cron.schedule(cronExpression, fn);
        }
    };
};
