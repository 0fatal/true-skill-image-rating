import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center mt-[240px]'>
      <h1 className='text-[64px]'>TrueSkill投票</h1>
      <div className='space-x-10'>
        <Button shape='round' onClick={() => navigate('/vote')} type='primary' size='large'>
          开始投票
        </Button>
        <Button shape='round' onClick={() => navigate('/result')} size='large'>
          投票结果分析
        </Button>
      </div>
    </div>
  )
}

export default HomePage
