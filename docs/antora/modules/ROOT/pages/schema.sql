drop table if exists goods;
create table goods
(
    id            bigint unsigned primary key auto_increment comment '主键',
    cover_image   VARCHAR(500)            NOT NULL COMMENT '封面图片. 多个之间使用,分割',
    cover_video   VARCHAR(255)            NOT NULL COMMENT '封面视频. 多个之间使用,分割',
    name          VARCHAR(255)            NOT NULL COMMENT '名称',
    detail        mediumtext              NOT NULL COMMENT '简介. 富文本',
    display_id    tinyint unsigned        NOT NULL COMMENT '展示状态. 上架、下架',
    price         decimal(11, 2) unsigned NOT NULL COMMENT '价格(元). 最大到亿，保留 2 位小数',
    remark        VARCHAR(255)            NOT NULL default '' COMMENT '备注',
    serial_number bigint unsigned         not null comment '序号',
    creator_id    bigint unsigned         not null comment '创建者. 主键',
    created_time  datetime                not null comment '创建时间',
    modifier_id   bigint unsigned         not null comment '最近修改者. 主键',
    modified_time timestamp               not null comment '最近修改时间'
) comment '商品';

drop table if exists contact_address;
create table contact_address
(
    id                 bigint unsigned primary key auto_increment comment '主键',
    contact_name       VARCHAR(255)    NOT NULL COMMENT '联系人姓名',
    contact_phone_code VARCHAR(255)    NOT NULL COMMENT '联系人手机号',
    address_id         BIGINT unsigned NOT NULL COMMENT '地址. 主键',
    address_detail     VARCHAR(255)    NOT NULL COMMENT '详细地址',
    source_id          bigint unsigned not null comment '上个联系地址. 0 表示新建，后续修改关联之前的联系地址主键',
    creator_id         bigint unsigned not null comment '创建者. 主键',
    created_time       datetime        not null comment '创建时间',
    modifier_id        bigint unsigned not null comment '最近修改者. 主键',
    modified_time      timestamp       not null comment '最近修改时间'
) comment '联系地址';

drop table if exists `order`;
create table `order`
(
    id                  bigint unsigned primary key auto_increment comment '主键',
    code                VARCHAR(255) UNIQUE                                         NOT NULL COMMENT '编号',
    goods_id            bigint unsigned                                             NOT NULL COMMENT '商品. 主键',
    goods_count         int unsigned                                                NOT NULL COMMENT '商品件数',
    shipping_address_id bigint unsigned                                             NOT NULL COMMENT '收货地址. 主键',
    amount              decimal(11, 2) unsigned                                     NOT NULL COMMENT '金额(元). 保留 2 位小数',
    payment_amount      decimal(11, 2) unsigned                                     NOT NULL COMMENT '付款金额(元). 保留 2 位小数',
    payment_time        datetime COMMENT '付款时间',
    node                enum ('SUBMIT','PAY','DELIVER','RECEIVE','CANCEL','REFUND') NOT NULL COMMENT '环节. 下单、付款、发货、收货、取消、退款',
    tense_state         enum ('DOING','SUCCESS','FAILURE')                          NOT NULL COMMENT '时态. 进行中、成功、失败',
    final_state         enum ('DOING','SUCCESS','FAILURE')                          NOT NULL COMMENT '终态. 进行中、交易成功、交易失败',
    remark              VARCHAR(255)                                                NOT NULL default '' COMMENT '备注',
    creator_id          bigint unsigned                                             not null comment '创建者. 主键',
    created_time        datetime                                                    not null comment '创建时间',
    modifier_id         bigint unsigned                                             not null comment '最近修改者. 主键',
    modified_time       timestamp                                                   not null comment '最近修改时间'
) comment '订单';

drop table if exists `order_log`;
create table `order_log`
(
    id               bigint unsigned primary key auto_increment comment '主键',
    order_id         bigint unsigned NOT NULL COMMENT '订单. 主键',
    description      varchar(255)    NOT NULL COMMENT '描述',
    operator_type_id tinyint         NOT NULL COMMENT '操作者类别. 会员、商户、运营',
    creator_id       bigint unsigned not null comment '创建者. 主键',
    created_time     datetime        not null comment '创建时间'
) comment '订单操作记录';
