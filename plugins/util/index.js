/**
 *函数防抖，需先初始化函数
 * @param {Function} 需执行函数
 * @param {Number} waitTime 延迟ms
 */
function bounce(func, waitTime) {
  let timer = null

  return function() {
    let _this = this
    let args = arguments

    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      func.apply(_this, args)
    }, waitTime)
  }
}

/**
 * 函数节流，需先初始化函数
 * @param {Function} func 需执行函数
 * @param {Number} waitTime 延时ms
 */
function throttle(func, watTime) {
  let timeout = null
  let lastRun = 0
  return function() {
    if (timeout) {
      return
    }
    let elapsed = Date.now() - lastRun
    let context = this
    let args = arguments
    let runCallback = function() {
      lastRun = Date.now()
      timeout = false
      func.apply(context, args)
    }
    if (elapsed >= watTime) {
      runCallback()
    } else {
      timeout = setTimeout(runCallback, watTime)
    }
  }
}

export { bounce, throttle }
