import { GetAnalysisRes, SingleAnalysis } from '@/models/GetAnalysis'
import { GetQuestionRes } from '@/models/GetQuestion'
import { ApiGet, baseUrl, getPicUrl } from '@/utils/request'
import { Button, Card, Divider, Form, Image, Select, Table, TableColumnsType } from 'antd'
import { useEffect, useState } from 'react'

const ResultPage = () => {
  const [data, setData] = useState<GetAnalysisRes>([])
  const [question, setQuestion] = useState<GetQuestionRes>([])
  const [qid, setQid] = useState<number>(0)

  const fetchAnalysis = async (qid: number) => {
    const data = await ApiGet<GetAnalysisRes>(`/true-skill/${qid}`)
    setData(data ?? [])
  }
  const fetchQuestion = async () => {
    const data = await ApiGet<GetQuestionRes>(`/question`)
    setQuestion(data ?? [])
  }

  useEffect(() => {
    question.length > 0 && setQid(question[0].ID)
  }, [question])

  useEffect(() => {
    fetchQuestion()
  }, [])

  useEffect(() => {
    fetchAnalysis(qid)
  }, [qid])

  const handleExport = () => {
    window.location.href = `${baseUrl}/api/true-skill/export`
  }

  const columns: TableColumnsType<SingleAnalysis> = [
    {
      title: '排名',
      width: 100,
      render: (_, record) => {
        return <span>{data.indexOf(record) + 1}</span>
      }
    },
    {
      title: '图片',
      width: 250,
      render: (_, record) => {
        return (
          <div className='flex flex-col space-y-1  align-middle'>
            <Image src={getPicUrl(record.img_name)} width={150}></Image>
            <span>{record.img_name}</span>
          </div>
        )
      }
    },
    {
      title: '平均值',
      dataIndex: 'menu'
    },
    {
      title: '误差',
      dataIndex: 'sigma'
    }
  ]

  return (
    <Card>
      <div>
        <section className='flex space-x-[100px] items-center'>
          <section>
            <label>选择问题：</label>
            <Select value={qid} placeholder='请选择' onChange={(v) => setQid(v)}>
              {question.map((q) => {
                return (
                  <Select.Option key={q.ID} value={q.ID}>
                    {q.que}
                  </Select.Option>
                )
              })}
            </Select>
          </section>
          <section>
            <Button className='!bg-green-500 !text-white rounded-lg' onClick={() => handleExport()}>
              导出到表格
            </Button>
          </section>
        </section>
        <Divider></Divider>
        <Table columns={columns} dataSource={data}></Table>
      </div>
    </Card>
  )
}

export default ResultPage
