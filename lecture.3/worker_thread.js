const {
    Worker, isMainThread, parentPort,
  } = require('worker_threads');
  
  if (isMainThread) { // 부모일 때
    const worker = new Worker(__filename); // 다른 파일도 가능하다는 것.
    const threads = new Set(); // 중복되지 않은 배열 -> Set()
    threads.add(new Worker(__filename, {
        workerData: {start : 1},
    }))
    threads.add(new Worker(__filename, {
        workerData: {start : 2},
    }))
    for (let worker of threads){
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            console.log('끝');
        });
    }
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping'); // 워커 하나 생성
  } else { // 워커일 때
    parentPort.on('message', (value) => { // value로 값이 들어옴
      console.log('from parent', value);
      parentPort.postMessage('pong'); // 퐁으로 받는다.
      parentPort.close();
    });
  }