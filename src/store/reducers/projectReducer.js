const initState = {
    projects: [
        {id: '1', title: 'asdcibs8yibec', content: 'iabs8dycbobdbycsda'},
        {id: '2', title: 'aidbcubaisodj', content: 'qhbocsubhadjqobuoq'},
        {id: '3', title: 'asidjncajnsdi', content: 'ajdncuandscjnaidnc'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
        
        break    
        default:
            console.log('nothing')
    }   
    
    
    return state
}
export default projectReducer