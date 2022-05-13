import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const ResultCp = () => {
  const navigate = useNavigate()
  return (
    <Result
      status='success'
      title='提交成功'
      subTitle='感谢您的参与！'
      extra={
        [
          // <Button type='primary' key='analysis' onClick={() => navigate('/result')}>
          //   结果分析
          // </Button>
        ]
      }
    />
  )
}

export default ResultCp
