export const goodsMessages = {
    resources: {
        "goods": {
            name: '商品',
            fields: {
                'id': '主键',
                'coverImage': '封面图片',
                'coverImages': '封面图片',
                'coverImageUrls': '封面图片',
                'coverVideo': '封面视频',
                'coverVideos': '封面视频',
                'coverVideoUrls': '封面视频',
                'name': '名称',
                'detail': '详情',
                'display': '展示状态',
                'price': '价格(元)',
                'remark': '备注',
                'serialNumber': '序号',
                'creatorId': '创建者',
                'createdTime': "创建时间",
                'createdTime.lowerBound': "创建时间起始值",
                'createdTime.upperBound': "创建时间结束值",
                'modifierId': '修改者',
                'modifiedTime': '修改时间',
                'modifiedTime.lowerBound': "修改时间起始值",
                'modifiedTime.upperBound': "修改时间结束值",
            },
        }
    }
}

//['id','coverImage','coverVideo','name','detail','displayId','price','remark','serialNumber','creatorId','createdTime','modifierId','modifiedTime',]
//['主键','封面图片','封面视频','名称','简介','展示状态','价格(元)','备注','序号','创建者','创建时间','最近修改者','最近修改时间',]

export default goodsMessages;
