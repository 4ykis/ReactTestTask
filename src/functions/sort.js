/**
 * Created by roman on 03.09.2017.
 */
function getSortFunc(param,type){
    switch(param){
        case 'name':
            return (a,b)=>{
                let al = a.name.toLowerCase();
                let bl = b.name.toLowerCase();
                if(type==='ASC'){
                    return (al >= bl)?1:-1;
                } else if (type === 'DESC') {
                    return (al >= bl)?-1:1;
                }
            }
            break;
        case 'id':
            return (a,b)=>{
                if(type==='ASC'){
                    return (a.id - b.id);
                } else if (type === 'DESC') {
                    return (b.id - a.id);
                }
            }
            break;
        case 'price':
            return (a,b)=>{
                if(type==='ASC'){
                    return (+a.price.substr(1) - +b.price.substr(1));
                } else if (type === 'DESC') {
                    return (+b.price.substr(1) - +a.price.substr(1));
                }
            }
            break;
        case 'rating':
            return (a,b)=>{
                if(type==='ASC'){
                    return (a.rating - b.rating);
                } else if (type === 'DESC') {
                    return (b.rating - a.rating);
                }
            }
            break;
        default:
            return null;
            break;
    }
}

export default getSortFunc;