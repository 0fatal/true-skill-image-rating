export type PostQuestionnaireRes = {}

export type PostQuestionnaireReq = {
  use_info: {
    age: number
    sex: string
    job: string
  }

  vote_result: {
    qid: number
    img_a: number
    img_b: number
    result: number
  }[]
}
