class stopWatch {
    constructor (obj = {}) {
        this.start = obj.start;
        this.stop = obj.stop;   
    }
   
    getStart() {
        return `this stopwatch start at ${this.start}` //untuk menguji nilai this.start
    }
    getStop() {
        return `this stopwatch stop at ${this.stop}` //untuk menguji nilai this.start
    }
}
const stopWatchTime = new stopWatch({


    start: new Date().toLocaleTimeString('id-ID', {timeZone:'Asia/Jakarta', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}),
    stop: new Date().toLocaleTimeString('id-ID', {timeZone:'Asia/Shanghai', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}),
   
})
console.log(stopWatchTime);

 class durationTime extends stopWatch {
     constructor (obj = {}) {
         super(obj);
         this.duration = parseInt(this.stop) - parseInt(this.start);

     }
   
 }
 

 const stopWatchDuration = new durationTime({
   

    start: new Date().toLocaleTimeString('id-ID', {timeZone:'Asia/Jakarta', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}),
    stop: new Date().toLocaleTimeString('id-ID', {timeZone:'Asia/Shanghai', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}),
    duration: {}
})
console.log(stopWatchDuration);