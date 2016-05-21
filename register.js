
(function() {
    Polymer({
        is:'clock-element',

        created: onElementCreated,
        attached: onElementAttached,
        ready: onElementReady,
        detached: onElementDetached,

        properties: {
            hour: {
                type: Number,
                value: 0,
                reflectToAttribute: true,
            },
            minute: {
                type: Number,
                value: 0,
                reflectToAttribute: true,
            },
            second: {
                type: Number,
                value: 0,
                reflectToAttribute: true,
            },
        },
        //lots of other stuff <--- Quite possiby the best comment ever
        startTimer: startTimer,
        stopTimer: stopTimer,
    });

    function onElementCreated() {
    }

    function onElementAttached() {

    }

    function onElementReady() {
//        this.startTimer();
        window.setTimeout(() => {
            Polymer.dom(this.root).querySelector('button').addEventListener('click', startTimer.bind(this))
        }, 1000)

    }

    function onElementDetached() {
    }

    function startTimer() {
//        let self = this;
//        window.setInterval(function() {
//            getTime.call(self);
//        }, 1000)
        this.procID = window.setInterval(() => {
            getTime.call(this);
        }, 1000)
    }

    function getTime() {
        let today = new Date();
        this.hour = today.getHours();
        this.minute = today.getMinutes();
        this.second = today.getSeconds();
    }

    function stopTimer() {
        window.clearInterval(this.procID);
    }
}) ();
