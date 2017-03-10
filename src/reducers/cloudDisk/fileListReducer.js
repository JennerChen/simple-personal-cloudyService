const fileListReducer = (state = {
	files:null,
	fetchingFile:false
}, action)=>{
	switch (action.type){
		case "START_FETCH_FILES":
			return Object.assign({}, state, {
				fetchingFile:true
			});
		
		case "COMPLETE_FETCH_FILES":
			return Object.assign({}, state,{
				fetchingFile:false,
				files: action.files
			});
			
		case "ERROR_FETCH_FILES":
			return Object.assign({}, state,{
				fetchingFile:false
			})
	}
	
	return state;
};

export default fileListReducer;
