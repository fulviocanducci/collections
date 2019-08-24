var collections = /** @class */ (function () {
    function collections(list) {
        this.list = list;
    }
    collections.prototype.all = function (fn) {
        return (typeof fn === 'undefined')
            ? this.list
            : this.list.map(fn);
    };
    collections.prototype.avg = function (map) {
        var newList = (typeof map !== 'undefined')
            ? this.list.map(map)
            : this.list;
        return newList.reduce(function (a, b) { return a + b; }) / newList.length;
    };
    collections.prototype.chunk = function (length) {
        if (length === void 0) { length = 2; }
        return this.list.reduce(function (p, cur, i) {
            (p[i / length | 0] = p[i / length | 0] || []).push(cur);
            return p;
        }, []);
    };
    collections.prototype.collapse = function () {
        function _collapse(list, items) {
            for (var index in list) {
                var item = list[index];
                if (typeof item === 'object') {
                    _collapse(item, items);
                }
                else {
                    items.push(item);
                }
            }
            return items;
        }
        ;
        var items = [];
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
    };
    return collections;
}());
