class collections {    
    constructor(private list: any[]) {

    }

    all(fn?) {
        return (typeof fn === 'undefined') 
            ? this.list
            : this.list.map(fn);
    }

    avg(map?) {
        const newList = (typeof map !== 'undefined') 
            ? this.list.map(map) 
            : this.list;
        return newList.reduce((a,b) => a + b) / newList.length;            
    }

    chunk(length: number = 2) {        
        return this.list.reduce((p, cur, i) => {
            (p[i/length|0] = p[i/length|0] || []).push(cur);
            return p;
        },[]);
    }

    collapse() {
        function _collapse (list:any[], items:any[]) {            
            for(let index in list) {      
                const item = list[index];                  
                if (typeof item === 'object') {
                    _collapse(item, items);                    
                } else {
                    items.push(item);
                }
            }
            return items;                
        };        
        let items:any[] = [];
        return _collapse(this.list, items); 
        // let items:any[] = [];
        // for(let i = 0; i < this.list.length; i++) {
        //     const item = this.list[i];
        //     if (typeof item === 'object') {
        //         items = [...items, ...item];                
        //     } else {
        //         items.push(item);
        //     }
        // }       
        // return items;
    }
}