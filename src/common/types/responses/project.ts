export interface Project {
    title: {
          ar: string
          en: string
      },
      category: string
      photo: string
      content: {      
          ar: string
          en: string
      }
  }

  export type ProjectResponse={
  
    data:{
    project:Project
    status:string

}
  }


export type ProjectsResponse={
  
        data:{
        projects:Project
        status:string

    }
}