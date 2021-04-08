import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {

    const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()

    // criar abstração http
    // criar interface para a call http
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)

    // infraestrutura executa com o framework escolhido
  })
})
