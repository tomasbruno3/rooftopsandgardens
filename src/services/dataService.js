import * as firebase from 'firebase';

export default class DataService {

  static async getAvailableRoomsByDates(userbook) {
  console.log("userbook: ", userbook)
  const db = firebase.firestore();
  let results = [];

  try {
    const querySnapshot = await db.collection('bookTable').get();
    let tableUnavailable = 0;
    querySnapshot.forEach(doc => {
      const objectResult = {available: false, ...doc.data()}

      objectResult.book.forEach(book => {
        if(book.inputDate.timestamp == userbook.inputDate.timestamp)
           {
            tableUnavailable++;
        }
      })

      objectResult.id = doc.id;
      if(tableUnavailable != objectResult.inputDate){
        objectResult.available = true
      }

      results.push(objectResult);
    })
  } catch (err) {
    console.log("TCL: DataService -> getContacts -> err", err)
  }

  return results;
}

  static async getContacts() {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection("users").get();

      querySnapshot.forEach(doc => {
        const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);
      })
    } catch (err) {
			console.log("TCL: DataService -> getContacts -> err", err)
    }

    return results;
  }

  static async getObjectDetail(collection, objId) {
    const db = firebase.firestore();
    let contact = null;

    try{ 
      const contactRef = await db.collection(collection).doc(objId).get();
      if(contactRef.exists) {
        contact = contactRef.data();
      }
    } catch (err){
			console.log("TCL: DataService -> getObjectDetail -> err", err)
    }

    return contact;
  }

  static async addObjectWithId(collection, objId, data) {
    return await DataService.updateDetail(collection, objId, data)
  }

  static async updateDetail(collection, id, data) {
    const db = firebase.firestore();
    let success = true;

    try {
      await db.collection(collection).doc(id).set(data, {merge: true});
    } catch (err) {
      success = false;
		  console.log("TCL: DataService -> updateDetail -> err", err)
    }

    return success;
  }

  static observeContacts(callback, userId){
    const db = firebase.firestore();

    return db.collection('users')
      .where('userId','==', userId)
      .onSnapshot((querySnapshot)=>{
      let results = [];

      querySnapshot.forEach(doc => {
				const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);
      });

      callback(results);
    })
  }
}
