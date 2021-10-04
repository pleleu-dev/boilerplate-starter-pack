const mutations = {
    toggleFavoriteSession (parent, { id }, { dataSources }, info){
        return dataSources.sessionAPI.toggleFavoriteSession(id)
    },
    addNewSession(parent, { session }, { dataSources }, info){
        return dataSources.sessionAPI.addNewSession(session)
    }
    
}

export default mutations;