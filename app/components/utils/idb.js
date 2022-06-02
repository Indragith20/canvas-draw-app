class Idb {
  constructor() { }

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
  performTransaction(mode, { key = null, transactionData = null }) {
    return new Promise((resolve, reject) => {
      const promises = [];
      if (!this.db || !this.db.transaction) {
        promises.push(this.initializeIndexedDb());
      }
      Promise.all(promises).then(() => {
        const transaction = this.db.transaction(['redux-persistance'], mode);
        const reduxState = transaction.objectStore('redux-persistance');
        if (mode === 'readonly') {
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
      const messageObj = {
        message: 'GET_DATA_SUCCESS',
        payload: transactionEvent.target.result
      };
      return transactionEvent.target.result
      // syncTabs(clientId, messageObj);
    });
  }

  updateDb(data, key) {
    this.performTransaction('readwrite', { transactionData: data, key }).then((transactionDet) => {
      // TODO: Uncomment the below line if syncing is required between tabs.
      /* syncTabs(clientId, data); */
      console.log('Error while performing transaction', transactionDet);
    });
  }
}


export default Idb;