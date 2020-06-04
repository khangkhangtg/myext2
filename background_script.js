// Put all the javascript code here, that you want to execute in background.

class Timer {
    constructor() {
        this.timer = 0;
    }

    countSecond() {
        this.timer++;
    }

    getTimer() {
        console.log(this.timer);
        return this.timer;
        // return Math.ceil(this.timer / 60);
    }

    start() {
        this.count = setInterval(this.countSecond, 1000);
    }

    pause() {
        if(this.count) clearInterval(this.count);
    }

    reset() {
        this.pause();
        this.timer = 0;
        this.start();
    }
}

function initTabs(tabs) {
    for (let tab of tabs) {
        tab.timer = new Timer();
        tab.timer.start();
        setInterval(() => {
            console.log(tab.timer.getTimer);
        }, 1000);
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({});
querying.then(initTabs, onError);