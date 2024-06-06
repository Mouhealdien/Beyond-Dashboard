export interface Evaluation {
    htmlContent:{
      en:string| null | undefined,
      ar:string| null | undefined
    }
  }


export type EvaluationResponse={
  
        data:{
        evaluation:Evaluation
        status:string

    }
}