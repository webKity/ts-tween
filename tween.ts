export class Tween {
  private _config: any;
  private _starttime: number;

  constructor(options: any = {}) {
    this._config = {
      from: {},
      to: {},
      duration: 300,
      ease: (k) => { return k; },
      update: () => {},
      complete: () => {}
    }
    this._config = Object.assign(this._config, options);
    return this;
  }
  start() {
    this._starttime = this.now();
    window.requestAnimationFrame(this.update.bind(this));
  }
  update(timestamp: number) {
    if (timestamp < this._starttime) return;
    let elapsed: number = (timestamp - this._starttime) / this._config.duration;
    elapsed = (this._config.duration === 0 || elapsed > 1) ? 1 : elapsed;
    let value: number = this._config.ease(elapsed);
    
    // 更新每一个属性的值
    for (let property in this._config.to) {
			if (this._config.from[property] === undefined) {
				continue;
			}
			let start = this._config.from[property] || 0;
			let end = this._config.to[property];

			if (typeof (end) === 'string') {
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
          end = start + parseFloat(end);
        } else {
          end = parseFloat(end);
        }
      }
      if (typeof (end) === 'number') {
        this._config.from[property] = start + (end - start) * value;
      }
    }
    
    this._config.update(this._config.from);

    if (elapsed === 1) {
			this._config.complete(this._config.from);
		} else {
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
  now() {
    if (typeof (window) !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined) {
	    return window.performance.now();
    } else if (Date.now !== undefined) {
      return Date.now();
    } else {
      return new Date().getTime()
    }
  }
}