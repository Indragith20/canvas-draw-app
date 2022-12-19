class LocalIdb {
  constructor() {
    this.initializeIndexedDb = this.initializeIndexedDb.bind(this);
    this.performTransaction = this.performTransaction.bind(this);
    this.getDataFromIdb = this.getDataFromIdb.bind(this);
    this.updateDb = this.updateDb.bind(this);
  }

  initializeIndexedDb() {
    return new Promise((resolve, reject) => {
      this.request = self.indexedDB.open('redux-state', '1');
      this.request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        this.db.createObjectStore('redux-persistance', {
          key: 'app-state-persist'
        });
      };
      // eslint-disable-next-line no-unused-vars
      this.request.onerror = (event) => {
        reject('err');
      };
      this.request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve('success');
      };
    });
  }


  // transaction data will be key in readonly mode and value to be stored in case of update
  performTransaction(mode, { key = null, transactionData = null, clearDb = false }) {
    return new Promise((resolve, reject) => {
      const promises = [];
      if (!this.db || !this.db.transaction) {
        promises.push(this.initializeIndexedDb());
      }
      Promise.all(promises).then(() => {
        const transaction = this.db.transaction(['redux-persistance'], mode);
        const reduxState = transaction.objectStore('redux-persistance');
        if (clearDb) {
          console.log('Clearing Db');
          this.transactionReq = reduxState.clear();
        } else if (mode === 'readonly') {
          this.transactionReq = reduxState.get(key);
        } else {
          this.transactionReq = reduxState.put(transactionData, key);
        }
        this.transactionReq.onsuccess = (event) => {
          resolve(event);
        };
        this.transactionReq.onerror = (event) => {
          reject('Error while initializing transation', event);
        };
      });
    });
  }

  getDataFromIdb(key) {
    return this.performTransaction('readonly', { key }).then((transactionEvent) => {
      return transactionEvent.target.result;
    });
  }

  updateDb(data, key) {
    this.performTransaction('readwrite', { transactionData: data, key }).then((transactionDet) => {
      console.log('Performed transaction', transactionDet);
    });
  }

  clearDb() {
    return this.performTransaction('readwrite', { clearDb: true });
  }
}

const Idb = new LocalIdb();


export default Idb;