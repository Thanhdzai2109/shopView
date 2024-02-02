export default class DanhMucData {
    constructor() {
        this.initArr();
    }
    initArr() {
        this.arrData = [];
        this.arrData.push(
            {
                id : 1 ,
                nameParent :'Computer & Desktop',
                dataChild: [
                    {
                        id: 1,
                        nameChile: 'laptop',
                    }  , 
                    {
                        id: 2,
                        nameChile: 'laptop',
                    }  , 
                    {
                        id: 3,
                        nameChile: 'laptop',
                    }  , 
                ]
            },
            {
                id : 2 ,
                nameParent :'Computer & Desktop'
            },
            {
                id : 3 ,
                nameParent :'Computer & Desktop'
            },
            {
                id : 4 ,
                nameParent :'Computer & Desktop'
            },

        )
    }
    getData() {
        return this.arrData;
    }
}