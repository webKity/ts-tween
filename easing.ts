
class Easing{
  constructor() {}
  linear(k) {
    return k;
	}
	quadraticIn(k) {
    return k * k;
  }
  quadraticOut(k) {
    return k * (2 - k);
  }
  quadraticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }
    return - 0.5 * (--k * (k - 2) - 1);
  }
  cubicIn(k) {
    return k * k * k;
  }
  cubicOut(k) {
    return --k * k * k + 1;
  }
  cubicInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k + 2);
  }
  quarticIn(k) {
    return k * k * k * k;
  }
  quarticOut(k) {
    return 1 - (--k * k * k * k);
  }
  quarticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k;
    }
    return - 0.5 * ((k -= 2) * k * k * k - 2);
  }
  quinticIn(k) {
    return k * k * k * k * k;
  }
  quinticOut(k) {
    return --k * k * k * k * k + 1;
  }
  quinticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k * k * k + 2);
  }
  sinusoidalIn(k) {
    return 1 - Math.cos(k * Math.PI / 2);
  }
  sinusoidalOut(k) {
    return Math.sin(k * Math.PI / 2);
  }
  sinusoidalInOut(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }
  exponentialIn(k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
  }
  exponentialOut(k) {
    return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
  }
  exponentialInOut(k) {
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if ((k *= 2) < 1) {
      return 0.5 * Math.pow(1024, k - 1);
    }
    return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
  }
  circularIn(k) {
    return 1 - Math.sqrt(1 - k * k);
  }
  circularOut(k) {
    return Math.sqrt(1 - (--k * k));
  }
  circularInOut(k) {
    if ((k *= 2) < 1) {
      return - 0.5 * (Math.sqrt(1 - k * k) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
  }
  elasticIn(k) {
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
  }
  elasticOut(k) {
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
  }
  elasticInOut(k) {
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    k *= 2;
    if (k < 1) {
      return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    }
    return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
  }
  backIn(k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  }
  backOut(k) {
    var s = 1.70158;
		return --k * k * ((s + 1) * k + s) + 1;
  }
  backInOut(k) {
    var s = 1.70158 * 1.525;
    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }
    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  }
}

export const easing = new Easing();