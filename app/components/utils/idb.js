
export class LocalIdb {
  constructor(dbName = 'redux-state', storeName = 'redux-persistance') {
    this.initializeIndexedDb = this.initializeIndexedDb.bind(this);
    this.performTransaction = this.performTransaction.bind(this);
    this.getDataFromIdb = this.getDataFromIdb.bind(this);
    this.updateDb = this.updateDb.bind(this);
    this.dbName = dbName;
    this.storeName = storeName
  }

  initializeIndexedDb() {
    return new Promise((resolve, reject) => {
      this.request = self.indexedDB.open(this.dbName, '1');
      this.request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        this.db.createObjectStore(this.storeName);
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
  performTransaction(mode, { key = null, transactionData = null, clearDb = false, action = 'put' }) {
    return new Promise((resolve, reject) => {
      const promises = [];
      if (!this.db || !this.db.transaction) {
        promises.push(this.initializeIndexedDb());
      }
      Promise.all(promises).then(() => {
        const transaction = this.db.transaction([this.storeName], mode);
        const idbState = transaction.objectStore(this.storeName);
        if (clearDb) {
          this.transactionReq = idbState.clear();
        } else if (mode === 'readonly') {
          this.transactionReq = idbState.get(key);
        } else {
          if (action === 'put') {
            this.transactionReq = idbState.put(transactionData, key);
          } else if (action === 'delete') {
            this.transactionReq = idbState.delete(key);
          }
          
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
      console.log('Performed transaction');
    });
  }

  deleteFromDb(key) {
    this.performTransaction('readwrite', { key, action: 'delete' }).then((transactionDet) => {
      console.log('Performed transaction');
    });
  }

  clearDb() {
    return this.performTransaction('readwrite', { clearDb: true });
  }
}

const Idb = new LocalIdb('redux-state', 'redux-persistance');

const ImageIdb = new LocalIdb('image-list', 'image-list-persist')

export { Idb, ImageIdb };