const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json') // 🔑 Download this from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const auth = admin.auth()

async function backfillUsers() {
  const listUsersResult = await auth.listUsers(1000)

  for (const user of listUsersResult.users) {
    const uid = user.uid
    const email = user.email
    const displayName = user.displayName || (email ? email.split('@')[0] : 'User')
    const teamId = `team_${uid}`

    const userRef = db.doc(`users/${uid}`)
    const teamRef = db.doc(`teams/${teamId}`)

    const userSnap = await userRef.get()
    const teamSnap = await teamRef.get()

    const batch = db.batch()

    if (!teamSnap.exists) {
      batch.set(teamRef, {
        name: `${displayName}'s Team`,
        createdBy: uid,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        members: {
          [uid]: {
            role: 'admin',
            joinedAt: admin.firestore.FieldValue.serverTimestamp()
          }
        }
      })
      console.log(`✅ Created team for ${uid}`)
    }

    if (!userSnap.exists) {
      batch.set(userRef, {
        uid,
        email,
        displayName,
        teamId,
        role: 'admin',
        subscription: {
          plan: 'trial',
          status: 'active',
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        }
      })
      console.log(`✅ Created user doc for ${uid}`)
    }

    await batch.commit()
  }

  console.log('🎉 Backfill complete.')
}

backfillUsers().catch(console.error)
