import DanhMucData from "./DanhMucList";
let danhMucData = null;
export const DataAll = {
    getDataDanhMuc(){
        if(!DanhMucData){
            danhMucData =new DanhMucData();
        }
        return danhMucData;
    }
}