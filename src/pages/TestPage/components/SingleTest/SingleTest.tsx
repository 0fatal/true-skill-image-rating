import { SingleQuestion } from '@/models/GetQuestion'
import { SingleQuestionnaire } from '@/models/GetQuestionnaire'
import { PostQuestionnaireReq } from '@/models/PostQuestionnaire'
import { getPicUrl } from '@/utils/request'
import useWindowSize from '@/utils/windowSize'
import { Button, Card, Divider, Image, Spin } from 'antd'
import { FC, useLayoutEffect, useState } from 'react'

interface IProps {
  data: SingleQuestionnaire
  lastData?: SingleQuestionnaire
  question: SingleQuestion
  onSubmit: (values: PostQuestionnaireReq.VoteResult) => void
}

const SingleTest: FC<IProps> = ({ data, onSubmit, question, lastData }) => {
  const handleSubmit = (side: number) => {
    onSubmit({
      qid: data.qid,
      img_a: data.options[0].pid,
      img_b: data.options[1].pid,
      result: side
    })
  }

  const [isLoading, setIsLoading] = useState([true, true])

  const size = useWindowSize()
  const isMd = size.width > 768
  const isLg = size.width > 1024

  const qs = question.que.split(question.em)

  useLayoutEffect(() => {
    if (lastData) {
      setIsLoading([
        lastData.options[0].pic !== data.options[0].pic,
        lastData.options[1].pic !== data.options[1].pic
      ])
    }
  }, [lastData])

  return (
    <Card>
      <div className='flex flex-col items-center'>
        <section>
          <h1 className='text-[24px]'>
            {qs[0]}
            <span
              className='font-bold text-[28px]'
              style={{
                color: question.color
              }}
            >
              {question.em}
            </span>
            {qs[1]}
          </h1>
        </section>
        <Divider />
        <section className='flex flex-col space-y-2 md:space-y-0 lg:flex-row'>
          <Image
            src={getPicUrl(data.options[0].pic)}
            className='shadow-lg border-2 border-slate-800 p-1'
            placeholder={
              <div className='flex justify-center items-center h-full'>
                <Spin tip='Loading...'></Spin>
              </div>
            }
            onLoad={() => {
              setIsLoading([false, isLoading[1]])
            }}
          ></Image>
          <Image
            onLoad={() => {
              setIsLoading([isLoading[0], false])
            }}
            placeholder={
              <div className='flex justify-center items-center h-full'>
                <Spin tip='Loading...'></Spin>
              </div>
            }
            src={getPicUrl(data.options[1].pic)}
            className='shadow-lg border-2  border-slate-800 p-1'
          ></Image>
        </section>
        <section className='flex space-x-10 mt-10'>
          <Button
            onClick={() => handleSubmit(0)}
            type='primary'
            size='large'
            className='w-[140px]'
            shape='round'
            disabled={isLoading[0] || isLoading[1]}
          >
            {isLg ? '左边' : '第一张'}
          </Button>
          <Button
            onClick={() => handleSubmit(1)}
            type='primary'
            size='large'
            className='w-[140px]'
            shape='round'
            disabled={isLoading[0] || isLoading[1]}
          >
            {isLg ? '右边' : '第二张'}
          </Button>
        </section>
        <section className='mt-3'>
          <Button
            onClick={() => handleSubmit(-1)}
            size='large'
            shape='round'
            disabled={isLoading[0] || isLoading[1]}
          >
            差不多
          </Button>
        </section>
      </div>
    </Card>
  )
}

export default SingleTest
