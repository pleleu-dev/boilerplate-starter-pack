/* eslint-disable no-underscore-dangle */
import Queries from './resolvers/queries';
import Sessions from './resolvers/sessions';
import Mutations from './resolvers/mutations';

const resolvers = {
  Queries,
  Mutations,
  Sessions,
  SessionOrError: {
    __resolveType(obj: { code: string; }) {
      if (obj.code) {
        return 'Error';
      }
      return 'Session';
    },
  },
};

export default resolvers;
