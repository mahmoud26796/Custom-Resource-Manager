const POLLING_INTERVAL : number = 500;
import osUtils from 'os-utils';

export const pollResources = () => {
    setInterval(async () => {
        const cpuUsage = await getCpuUsage();
        const ramUsage = getRamUsage();
        console.log(`cpuUsage : ${cpuUsage}\nramUsage : ${ramUsage}`);
    }, POLLING_INTERVAL);
};
// gets the cpu usage with the help of osUtils package and returns a promise 
const getCpuUsage = ()  => {
    return new Promise(resolve => {
        osUtils.cpuUsage(resolve);
    });
}
// gets the ram usage with the help of osUtils package and returns a promise 
const getRamUsage = () => {
    // the range free mem percentage returns is from 0 to 1 so subtracting from 1 is getting the used memory
    return 1 - osUtils.freememPercentage();
} 