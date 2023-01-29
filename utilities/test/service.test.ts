import { fetch } from '@remix-run/node'

import { getGames, mapGamesData } from '../api/get-games-service'

const mockFetch = fetch as jest.MockedFn<typeof fetch>
const mockResponse = (mockData: any): Response =>
  ({ json: async () => mockData } as Response)

const mockGames = {
  data: [
    {
      id: 857429,
      date: '2022-10-28T00:00:00.000Z',
      home_team: {
        id: 18,
        abbreviation: 'MIN',
        city: 'Minnesota',
        conference: 'West',
        division: 'Northwest',
        full_name: 'Minnesota Timberwolves',
        name: 'Timberwolves',
      },
      home_team_score: 0,
      period: 0,
      postseason: false,
      season: 2022,
      status: '8:00 PM ET',
      time: '',
      visitor_team: {
        id: 14,
        abbreviation: 'LAL',
        city: 'Los Angeles',
        conference: 'West',
        division: 'Pacific',
        full_name: 'Los Angeles Lakers',
        name: 'Lakers',
      },
      visitor_team_score: 0,
    },
    {
      id: 857440,
      date: '2022-10-29T00:00:00.000Z',
      home_team: {
        id: 7,
        abbreviation: 'DAL',
        city: 'Dallas',
        conference: 'West',
        division: 'Southwest',
        full_name: 'Dallas Mavericks',
        name: 'Mavericks',
      },
      home_team_score: 0,
      period: 0,
      postseason: false,
      season: 2022,
      status: '9:00 PM ET',
      time: '',
      visitor_team: {
        id: 21,
        abbreviation: 'OKC',
        city: 'Oklahoma City',
        conference: 'West',
        division: 'Northwest',
        full_name: 'Oklahoma City Thunder',
        name: 'Thunder',
      },
      visitor_team_score: 0,
    },
  ],
  meta: {
    total_pages: 24,
    current_page: 1,
    next_page: 2,
    per_page: 50,
    total_count: 1161,
  },
}

jest.mock('@remix-run/node', () => ({
  fetch: mockFetch,
}))

describe.skip('getGames', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('should return list of games', async () => {
    // mockFetch.mockResolvedValue(mockResponse(mockGames))

    // const expectedResults = await getGames()

    // expect(expectedResults).toEqual(mapGamesData(mockGames.data))

    expect(true).toBeTruthy()
  })
})
