import createEasyFirestore from 'vuex-easy-firestore';

const orgsDataModule = {
    firestorePath: 'orgs',
    firestoreRefType: 'collection', // or 'doc'
    moduleName: 'orgs',
    statePropName: 'docs',

    getters: {
      userOrgs: (state) => (userId) => {
        var userOrgs = []
        for (var key in state.docs) {
          //console.warn(state.docs[key])
          if (state.docs.hasOwnProperty(key)) {
            if (state.docs[key].collaborators.includes(userId) || state.docs[key].admins.includes(userId)) {
              userOrgs.push(state.docs[key])
            }
          }
        }
        return userOrgs
      }
    }
  }

export default createEasyFirestore(orgsDataModule, {logging: true});
