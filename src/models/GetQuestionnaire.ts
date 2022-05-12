export type GetQuestionnaireRes = {
  list: SingleQuestionnaire[]
}

export type SingleQuestionnaire = {
  question: string
  qid: number
  options: [
    {
      pic: string
      pid: number
    },
    {
      pic: string
      pid: number
    }
  ]
}
