import { SingleQuestionnaire } from '@/models/GetQuestionnaire'
import { PostQuestionnaireReq } from '@/models/PostQuestionnaire'
import { getPicUrl } from '@/utils/request'
import { Button, Card, Divider, Image } from 'antd'
import { FC } from 'react'

interface IProps {
  data: SingleQuestionnaire
  onSubmit: (values: PostQuestionnaireReq.VoteResult) => void
}

const SingleTest: FC<IProps> = ({ data, onSubmit }) => {
  const handleSubmit = (side: number) => {
    onSubmit({
      qid: data.qid,
      img_a: data.options[0].pid,
      img_b: data.options[1].pid,
      result: side
    })
  }
  return (
    <Card>
      <div className='flex flex-col items-center'>
        <section>
          <h1 className='text-[32px]'>{data.question}</h1>
        </section>
        <Divider />
        <section className='flex'>
          <Image src={getPicUrl(data.options[0].pic)}></Image>
          <Image src={getPicUrl(data.options[1].pic)}></Image>
        </section>
        <section className='flex space-x-10 mt-10'>
          <Button onClick={() => handleSubmit(0)} type='primary' size='large'>
            左边
          </Button>
          <Button onClick={() => handleSubmit(1)} type='primary' size='large'>
            右边
          </Button>
        </section>
        <section className='mt-3'>
          <Button onClick={() => handleSubmit(-1)} size='large'>
            差不多
          </Button>
        </section>
      </div>
    </Card>
  )
}

export default SingleTest
