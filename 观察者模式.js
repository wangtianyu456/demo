// 实现一个数据打包下载功能
// 观察者模式
// 定义一个DownloadTask类作为观察者
class DownloadTask {
  constructor(id) {
    this.id = id
    this.loaded = false
    this.url = null
  }

  finish(url) {
    this.loaded = true
    this.url = url
    console.log(`Task ${ this.id } load data from ${ this.url }`)
  }
}

// 再定义一个DownloadTaskList类方便管理多个下载任务
class DownloadTaskList {
  constructor() {
    this.downloadTaskList = []
  }

  getCount() {
    return this.downloadTaskList.length
  }

  get(index) {
    return this.downloadTaskList[index]
  }

  add(obj) {
    return this.downloadTaskList.push(obj)
  }

  remove(obj) {
    const downloadTaskCount = this.getCount()
    let i = 0
    while (i < downloadTaskCount) {
      if (this.downloadTaskList[i] === obj) {
        this.downloadTaskList.splice(i, 1)
        break
      }
      i++
    }
  }
}

class DataHub {
  constructor() {
    this.downloadTasks = new DownloadTaskList()
  }

  addDownloadTask(downloadTask) {
    this.downloadTasks.add(downloadTask)
  }

  removeDownloadTask(downloadTask) {
    this.downloadTasks.remove(downloadTask)
  }

  notify(url) {
    const downloadTaskCount = this.downloadTasks.getCount()
    for (let i = 0; i < downloadTaskCount; i++) {
      this.downloadTasks.get(i).finish(url)
    }
  }
}

// 创建一个数据中心
let dataHub = new DataHub()

// 现在用户来取数据了，创建两个任务
let downloadTask1 = new DownloadTask(1)
let downloadTask2 = new DownloadTask(2)

dataHub.addDownloadTask(downloadTask1)
dataHub.addDownloadTask(downloadTask2)

// 数据打包完成了
dataHub.notify('https://www.wtianyu.top')
