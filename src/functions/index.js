const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.createUserAndTeam = functions.auth.user().onCreate(async (user) => {
  const uid = user.uid
  const email = user.email
  const displayName = user.displayName || email?.split('@')[0]
  const teamId = `team_${uid}`

  const db = admin.firestore()

  const batch = db.batch()

  // Create team doc
  const teamRef = db.doc(`teams/${teamId}`)
  batch.set(teamRef, {
    createdBy: uid,
    name: `${displayName}'s Solo Team`,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    members: {
      [uid]: 'admin'
    }
  })

  // Create user doc
  const userRef = db.doc(`users/${uid}`)
  batch.set(userRef, {
    email,
    displayName,
    teamId,
    role: 'admin',
    subscription: {
      plan: 'trial',
      status: 'active'
    }
  })

  await batch.commit()
})
