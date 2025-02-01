/** 
 * 整个项目api的统一管理
 */
import request from "./request";


// 设置首页左侧的表格的数据
export default {
    getTableData() {
        return request({
            url: "/home/getTableData",
            method: "get",
            mock: true
        })
    },
    getCountData() {
        return request({
            url: "/home/getCountData",
            method: "get",
            mock: true
        })
    },
}