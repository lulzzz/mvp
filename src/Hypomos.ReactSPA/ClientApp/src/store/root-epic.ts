import { combineEpics } from 'redux-observable';

import * as collections from '../features/collections/epics';
import * as whoAmI from '../features/whoAmI/epics';

export default combineEpics(...Object.values(collections), ...Object.values(whoAmI));