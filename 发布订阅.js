// 用发布订阅来实现
// 定义DataHub类作为发布者
class DataHub {
  notify(url, callback) {
    callback(url);
  }
}

// 定义DownloadManager 类为事件通道
class DownloadManager {
  constructor() {
    this.events = {};
    this.uId = -1;
  }

  publish(eventType, url) {
    if (!this.events[eventType]) {
      return false;
    }
    let subscribers = this.events[eventType];
    let count = subscribers ? subscribers.length : 0;
    while (count--) {
      let subscriber = subscribers[count];
      subscriber.handler(eventType, subscriber.taskId, url);
    }
  }

  subscribe(eventType, handler) {
    if (!this.events[eventType]) {
      this.events[eventType] = [];
    }
    let taskId = (++this.uId).toString();
    this.events[eventType].push({
      taskId,
      handler
    });
    return taskId;
  }
}
