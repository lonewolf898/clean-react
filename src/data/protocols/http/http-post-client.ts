/**
 * para que facilite inserir mais parâmetros
 * e não quebre a implementação
 * */
export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>
}
