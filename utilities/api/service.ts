import { fetch } from '@remix-run/node'
import type { gamesDTO } from './dtos'
import type { GameStatus } from './types'

const currentDate = new Date()
const year = currentDate.getFullYear()
const defaultStartDate = currentDate.toISOString().split('T')[0]

currentDate.setDate(currentDate.getDate() + 7)
const defaultEndDate = currentDate.toISOString().split('T')[0]

/* 
NOTES:

This method grabs the data neccessary to fetch the last 10 or so games.
The method returns an async Promise that can either "resolves" (no errors & has data) or "rejects" (errors & does not have data).

PSEUDO - I "metaRequest" promise(toResolve, orToReject) => { ...when code } is done.

Keep the above PSEUDO in mind for the rest of the methods below.
*/

// export const metaRequest = async (season = new Date().getFullYear()) => {
//   let responseData = { season }

//   await fetch(
//     `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&per_page=10`
//   )

//   return new Promise((resolve, reject) => {
//     https
//       .get(
//         `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&per_page=10`,
//         (res) => {
//           console.log(`status: ${res.statusCode}`)

//           res.on('data', (chunk) => {
//             chunkData.push(chunk)
//           })

//           res.on('end', () => {
//             console.log(`finish grabbing game meta data.`)

//             const parseChunk = JSON.parse(Buffer.concat(chunkData).toString())

//             responseData.last_page = parseChunk?.meta?.total_pages
//             responseData.statusCode =
//               parseChunk?.data.length > 0 ? res.statusCode : 404
//             responseData.message =
//               res.statusCode === 200 && parseChunk.data.length !== 0
//                 ? 'OK'
//                 : failureMessage

//             resolve(responseData)
//           })
//         }
//       )
//       .on('error', (error) => {
//         console.error(error)
//         responseData.statusCode = 500
//         responseData.message = 'INTERNAL ERROR: See logs for details.'

//         reject(responseData)
//       })
//   })
// }

export const mapGamesData = (gamesData): gamesDTO[] =>
  gamesData.map(({ home_team, visitor_team, ...game }) => ({
    home_team: {
      id: home_team.id,
      fullName: home_team.full_name,
      score: game.home_team_score,
      stats: null,
    },
    visitor_team: {
      id: visitor_team.id,
      fullName: visitor_team.full_name,
      score: game.visitor_team_score,
      stats: null,
    },
    id: game.id,
    status: game.status as GameStatus | string,
    date: new Date(game.date).toDateString(),
  }))

export const getGames = async (
  season = year,
  startDate: string = defaultStartDate,
  endDate: string = defaultEndDate
) => {
  try {
    const gamesResponse = await fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&start_date=${startDate}&end_date=${endDate}&per_page=100`
    )

    const gamesResponseData = await gamesResponse.json()

    // Retry recursively w/ different year
    if (gamesResponse.status === 200 && gamesResponseData.data.length === 0) {
      getGames(season - 1, startDate, endDate)
    }

    return {
      data: mapGamesData(gamesResponseData.data),
      meta: { ...gamesResponseData.meta, season },
    }
  } catch (err) {
    console.error(err)
  }
}
