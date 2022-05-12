import { GetQuestionnaireRes, SingleQuestionnaire } from '@/models/GetQuestionnaire'
import { PostQuestionnaireReq } from '@/models/PostQuestionnaire'
import { ApiGet, ApiPost } from '@/utils/request'
import { useReactive } from 'ahooks'
import { Alert, Button, Image, message, Modal, Progress, Spin } from 'antd'
import { useEffect, useState } from 'react'
import ResultCp from './components/ResultCp/ResultCp'
import SingleTest from './components/SingleTest/SingleTest'
import UserInfoInput from './components/UserInfoInput/UserInfoInput'

const TestPage = () => {
  const data = useReactive<Partial<PostQuestionnaireReq>>({
    use_info: undefined,
    vote_result: []
  })

  const [questionnaire, setQuestionnaire] = useState<SingleQuestionnaire[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dialogVisible, setDialogVisible] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fetchQuestionnaire = async () => {
    const res = await ApiGet<GetQuestionnaireRes>('/questionnaire')
    res?.list.sort((a, b) => a.qid - b.qid)
    setQuestionnaire(res?.list ?? [])
  }

  const doSubmit = () => {
    Modal.confirm({
      content: '你已完成全部投票，确定提交吗？',
      okText: '确定',
      cancelText: '取消',
      async onOk() {
        await ApiPost('/questionnaire', data)
        setIsSubmitted(true)
      },
      visible: dialogVisible
    })
  }

  const handleSubmit = (r: PostQuestionnaireReq.VoteResult) => {
    data.vote_result?.push(r)
    setCurrentIndex(currentIndex + 1)
    if (currentIndex + 1 < questionnaire.length) return

    doSubmit()
  }

  useEffect(() => {
    fetchQuestionnaire()
  }, [])

  if (isSubmitted) {
    return <ResultCp />
  }

  if (!data.use_info) {
    return (
      <UserInfoInput
        onSubmit={(v) => {
          data.use_info = v
          message.info('开始投票！')
        }}
      />
    )
  }

  if (questionnaire.length === 0) {
    return (
      <div className='flex justify-center h-screen items-center'>
        <Spin tip='Loading...'></Spin>
      </div>
    )
  }

  return (
    <div className='p-[20px] flex flex-col items-center page-vote'>
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068'
        }}
        percent={Math.ceil((currentIndex / questionnaire.length) * 100)}
      />
      {currentIndex < questionnaire.length ? (
        <SingleTest data={questionnaire[currentIndex]} onSubmit={handleSubmit}></SingleTest>
      ) : (
        <Button
          shape='round'
          size='large'
          onClick={() => doSubmit()}
          type='primary'
          className='mt-[200px] w-[200px]'
        >
          提交投票
        </Button>
      )}
    </div>
  )
}

export default TestPage
