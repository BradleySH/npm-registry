
import {ActionType} from "./action-types/index";
import {Action} from "./actions"


interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

// ActionType.SEARCH_REPOSITORIES
// ActionType.SEARCH_REPOSITORIES_SUCCESS
// ActionType.SEARCH_REPOSITORIES_ERROR

const reducer = (state: RepositoriesState = initialState, action: Action ): RepositoriesState => {
  
    switch (action.type){
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: false, error: action.payload, data: []};

        default:
            return state;
    }
};

export default reducer