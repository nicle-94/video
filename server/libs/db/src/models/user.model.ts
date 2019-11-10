import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

//可以定义这个模型的其他属性
@modelOptions({
    schemaOptions: {
        //就会增加创建时间和更新时间两个字段
        timestamps: true
    }
})
//导出用户的类
export class User {
    //定义每一个属性的名字以及示例值
    @ApiModelProperty({ description: '用户名', example: 'user1' })
    //装饰他的属性
    @prop()
    userName: String
    //定义每一个属性的名字以及示例值
    @ApiModelProperty({ description: '密码', example: 'pass1' })
    @prop()
    password: string
    //定义了用户名和密码两个属性
}