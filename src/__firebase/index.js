import firebase from "firebase/app"

import "firebase/analytics"

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
	if (process.env.NODE_ENV === "production") {
		firebase.analytics()
	}
})()

export default firebase
