export type PostQuestionnaireRes = {}

export interface PostQuestionnaireReq {
  use_info: PostQuestionnaireReq.UserInfo
  vote_result: PostQuestionnaireReq.VoteResult[]
}

export namespace PostQuestionnaireReq {
  export type UserInfo = {
    age: number
    sex: string
    job: string
  }
  export type VoteResult = {
    qid: number
    img_a: number
    img_b: number
    result: number
  }
}
