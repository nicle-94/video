import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'

//可以定义这个模型的其他属性
@modelOptions({
    schemaOptions: {
        //就会增加创建时间和更新时间两个字段
        timestamps: true
    }
})
//导出用户的类
export class Course {
    //定义每一个属性的名字以及示例值
    @ApiModelProperty({ description: '课程名称' })
    //装饰他的属性
    @prop()
    name: String
    //定义每一个属性的名字以及示例值
    @ApiModelProperty({ description: '封面图' })
    @prop()
    cover: string
    //由于课时是数组
    @arrayProp({ itemsRef: 'Episode' })
    //参考的类型（Episode模型）
    episodes: Ref<Episode>[]
}