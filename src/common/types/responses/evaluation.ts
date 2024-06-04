export interface Evaluation {
    htmlContent:string
  }


export type EvaluationResponse={
  
        data:{
        evaluation:Evaluation
        status:string

    }
}