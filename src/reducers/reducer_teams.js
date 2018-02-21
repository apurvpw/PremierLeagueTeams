import { FETCH_TEAMS } from '../actions/fetchTeamsAction';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEAMS :
     return  action.payload.data.teams;
  }

  return state;
}
