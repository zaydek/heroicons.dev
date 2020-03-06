import firebase from "firebase/app"

import "firebase/analytics"
// import "firebase/auth"
// import "firebase/firestore"
// import "firebase/storage"

;(() => {
	firebase.initializeApp({
		apiKey: "AIzaSyCr10TDVXdVZ5Mxuuq5ZNtk_7wJrdH1o3Y",
		authDomain: "heroicons-f786c.firebaseapp.com",
		databaseURL: "https://heroicons-f786c.firebaseio.com",
		projectId: "heroicons-f786c",
		storageBucket: "heroicons-f786c.appspot.com",
		messagingSenderId: "266565715070",
		appId: "1:266565715070:web:bc88d7410525a41854042f",
		measurementId: "G-Q3VFK545JD",
	})
	// // https://firebase.google.com/docs/firestore/manage-data/enable-offline
	// firebase.firestore().enablePersistence().catch(error => {
	// 	if (error.code === "failed-precondition") {
	// 		// Multiple tabs open, persistence can only be enabled
	// 		// in one tab at a a time.
	// 		// ...
	// 		// TODO
	// 	} else if (error.code === "unimplemented") {
	// 		// The current browser does not support all of the
	// 		// features required to enable persistence
	// 		// ...
	// 		// TODO
	// 	}
	// 	console.error(error)
	// })
	if (process.env.NODE_ENV === "production") {
		firebase.analytics()
	}
})()

export default firebase
