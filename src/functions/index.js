const functions = require('firebase-functions')
const admin = require('firebase-admin')

// Initialize Admin SDK
admin.initializeApp()

const db = admin.firestore()

// ➡️ Auto-create User and Team on Signup
exports.createUserAndTeam = functions.auth.user().onCreate(async (user) => {
  const uid = user.uid
  const email = user.email
  const displayName = user.displayName || (email ? email.split('@')[0] : 'User')
  const teamId = `team_${uid}`

  const batch = db.batch()

  // ✅ Create Team Document
  const teamRef = db.doc(`teams/${teamId}`)
  batch.set(teamRef, {
    createdBy: uid,
    name: `${displayName}'s Solo Team`,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    members: {
      [uid]: {
        role: 'admin',
        joinedAt: admin.firestore.FieldValue.serverTimestamp()
      }
    }
  })

  // ✅ Create User Document
  const userRef = db.doc(`users/${uid}`)
  batch.set(userRef, {
    email: email || '',
    displayName: displayName,
    teamId: teamId,
    role: 'admin',
    subscription: {
      plan: 'trial', // You can change this later via Stripe integration
      status: 'active'
    },
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  })

  // Commit all writes atomically
  await batch.commit()

  console.log(`✅ User ${uid} and Team ${teamId} created.`)
})
