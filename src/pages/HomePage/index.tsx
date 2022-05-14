import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center pt-[140px] md:pt-[240px]'>
      <h1 className='text-[32px] md:text-[64px]'>街道空间品质在线投票</h1>
      <div className='space-x-5 md:space-x-10'>
        <Button shape='round' onClick={() => navigate('/vote')} type='primary' size='large'>
          开始投票
        </Button>

        {/* <Button shape='round' onClick={() => navigate('/result')} size='large'>
          投票结果分析
        </Button> */}
      </div>
      <footer className='flex align-text-top mt-[130px] md:mt-16 flex-col md:flex-row px-4'>
        <h2 className='text-[18px] md:text-[22px]'>投票规则：</h2>
        <p className='max-w-[500px] text-[14px] md:text-[16px] leading-8 ml-2 text-gray-600'>
          我们一共设置了5个与街道空间品质相关的问题，您需要根据每个问题，选择您认为最恰当的场景照片。每个问题需要进行10次投票，共50次，耗时5分钟。
        </p>
      </footer>
      <footer className='mt-10 md:mt-6 md:text-[20px]'>
        *** 这是关于个体感知街道空间品质的众包调查 ***
      </footer>
    </div>
  )
}

export default HomePage
