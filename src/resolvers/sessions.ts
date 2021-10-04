
import  { ApolloError } from "apollo-server";

const sessions = {
    async speakers (session, args, { dataSources }){
        try{
            const speakers = await dataSources.speakerAPI.getSpeakers();
            return speakers.filter(speaker => {
                const hasSession = speaker.sessions.filter(s=> s.id == session.id)
                return hasSession.length > 0
            })
        }catch(err){
            return new ApolloError("Unable to retrieve speakers", "SPEAKERAPI ERROR", {
                token:  "unique token"
            })
        }
    }
}

export default sessions;