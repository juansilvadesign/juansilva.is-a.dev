import os from 'os';

class SystemMonitor {
  constructor() {
    this.startTime = Date.now();
  }

  getSystemStats() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    return {
      uptime: process.uptime(),
      totalMemory: this.formatBytes(totalMemory),
      freeMemory: this.formatBytes(freeMemory),
      usedMemory: this.formatBytes(usedMemory),
      memoryUsage: ((usedMemory / totalMemory) * 100).toFixed(2) + '%',
      cpuLoad: os.loadavg(),
      timestamp: new Date().toISOString()
    };
  }

  formatBytes(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  }
}

export default SystemMonitor;
