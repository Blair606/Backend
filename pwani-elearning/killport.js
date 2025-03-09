const { exec } = require('child_process');
const isWindows = process.platform === 'win32';

const port = 3000;

// Command differs based on operating system
const command = isWindows
    ? `netstat -ano | findstr :${port}`
    : `lsof -i :${port}`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error finding process: ${error}`);
        return;
    }

    if (!stdout) {
        console.log(`No process found running on port ${port}`);
        return;
    }

    // Parse the output to find PID
    let pid;
    if (isWindows) {
        pid = stdout.split('\n')[0].split(' ').filter(Boolean).pop();
    } else {
        const lines = stdout.split('\n');
        if (lines.length > 1) {
            pid = lines[1].split(' ').filter(Boolean)[1];
        }
    }

    if (!pid) {
        console.log('Could not find PID');
        return;
    }

    // Kill the process
    const killCommand = isWindows ? `taskkill /F /PID ${pid}` : `kill -9 ${pid}`;
    
    exec(killCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error killing process: ${error}`);
            return;
        }
        console.log(`Successfully killed process ${pid} running on port ${port}`);
    });
});
