import { PostQuestionnaireReq } from '@/models/PostQuestionnaire'
import { useReactive } from 'ahooks'
import { Button, Card, Divider, Form, Input, InputNumber, Modal, Select } from 'antd'
import { FC, useState } from 'react'

interface IProps {
  onSubmit: (values: PostQuestionnaireReq.UserInfo) => void
}

const UserInfoInput: FC<IProps> = ({ onSubmit }) => {
  const form = useReactive<Partial<PostQuestionnaireReq.UserInfo>>({
    age: undefined,
    job: '',
    sex: undefined
  })
  const [dialogVisible, setDialogVisible] = useState(true)
  const handleSubmit = () => {
    Modal.confirm({
      content: '确定保存并开始投票吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        onSubmit({ ...(form as any) })
      },
      visible: dialogVisible
    })
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Card className='w-full md:w-[400px]'>
        <header className='flex justify-center'>
          <h1 className='text-[32px]'>填写基本信息</h1>
        </header>
        <Divider></Divider>

        <Form onFinish={handleSubmit}>
          <Form.Item label='年龄' rules={[{ required: true, message: '请输入年龄' }]} name='age'>
            <InputNumber
              max={120}
              min={7}
              placeholder='请输入年龄'
              value={form.age}
              onChange={(v) => (form.age = v)}
            ></InputNumber>
          </Form.Item>
          <Form.Item label='性别' rules={[{ required: true, message: '请输入性别' }]} name='sex'>
            <Select value={form.sex} onChange={(v) => (form.sex = v)} placeholder='请选择性别'>
              <Select.Option value='男'>男</Select.Option>
              <Select.Option value='女'>女</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='专业' rules={[{ required: true, message: '请输入专业' }]} name='job'>
            <Input
              placeholder='请输入专业'
              value={form.job}
              onChange={(v) => (form.job = v.target.value)}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' block size='large' type='primary'>
              保存并开始
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default UserInfoInput
