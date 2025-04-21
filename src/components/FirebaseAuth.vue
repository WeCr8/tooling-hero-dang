<template>
  <div class="flex justify-center items-center min-h-screen">
    <div id="firebaseui-auth-container" class="p-6 w-full max-w-md bg-white shadow rounded"></div>
  </div>
</template>

<script>
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'FirebaseAuth',
  mounted() {
    const auth = getAuth()
    const uiConfig = {
      signInSuccessUrl: '/dang',
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    }

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>